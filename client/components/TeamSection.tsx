import { Mail, Phone, MapPin, MessageCircle, Linkedin } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  jobTitle: string;
  description?: string;
  photo: string;
  photoAlt: string;
  address: {
    street: string;
    building?: string;
    city: string;
    country: string;
  };
  email?: string;
  phones?: string[];
  whatsapp?: string;
  linkedin?: string;
}

// Team data
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Issam Berrhazi",
    jobTitle: "Directeur General",
    description: "Expert en cultures hydroponiques, fermes indoor (CEA) et serres agricoles modernes",
    photo: "/issam-berrhazi.png",
    photoAlt: "Photo de Issam Berrhazi - Directeur General",
    address: {
      street: "Bd Lalla Yacout & Rue Aaraar",
      building: "Immeuble 9, Appartement 17",
      city: "Casablanca",
      country: "Maroc"
    },
    email: "Issam_berrhazi@hotmail.com",
    phones: ["+212 6 01 70 02 02", "+212 6 37 91 97 39"],
    whatsapp: "+212601700202",
    linkedin: "https://www.linkedin.com/in/issam-berrhazi-1636ab175"
  }
];

interface TeamMemberCardProps {
  member: TeamMember;
}

function TeamMemberCard({ member }: TeamMemberCardProps) {
  const fullAddress = member.address.building
    ? `${member.address.street}\n${member.address.building}\n${member.address.city} - ${member.address.country}`
    : `${member.address.street}\n${member.address.city} - ${member.address.country}`;

  return (
    <div className="group bg-background  rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-border/40 shadow-soft hover:shadow-soft-xl transition-all duration-300 hover:-translate-y-2">
      {/* Profile Image */}
      <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 mx-auto mb-4 sm:mb-6">
        <img
          src={member.photo}
          alt={member.photoAlt}
          className="w-full h-full object-cover rounded-full border-3 sm:border-4 border-[#00A651] shadow-lg group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#00A651]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Name & Job Title */}
      <div className="text-center mb-3 sm:mb-4">
        <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1 sm:mb-2 font-display">
          {member.name}
        </h3>
        <p className="text-[#00A651] font-semibold text-sm sm:text-base mb-1 sm:mb-2">
          {member.jobTitle}
        </p>
        {member.description && (
          <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
            {member.description}
          </p>
        )}
      </div>

      {/* Contact Info */}
      <div className="space-y-3 sm:space-y-4 mt-4 sm:mt-6">
        {/* Phone Numbers */}
        {member.phones && member.phones.length > 0 && (
          <div className="space-y-1.5 sm:space-y-2">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-foreground/80">
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00A651]" />
              <span>Mobile / WhatsApp</span>
            </div>
            <div className="ml-5 sm:ml-6 space-y-1">
              {member.phones.map((phone, index) => (
                <a
                  key={index}
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="block text-xs sm:text-sm text-foreground/70 hover:text-[#00A651] transition-colors"
                >
                  {phone}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* WhatsApp Button */}
        {member.whatsapp && (
          <a
            href={`https://wa.me/${member.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2 sm:py-2.5 bg-[#25D366] text-white rounded-lg font-medium hover:bg-[#20BD5A] transition-colors text-sm"
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Contacter sur WhatsApp</span>
          </a>
        )}

        {/* LinkedIn Button */}
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2 sm:py-2.5 bg-[#0A66C2] text-white rounded-lg font-medium hover:bg-[#004182] transition-colors text-sm"
          >
            <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Voir le profil LinkedIn</span>
          </a>
        )}

        {/* Email */}
        {member.email && (
          <div className="space-y-1.5 sm:space-y-2">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-foreground/80">
              <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00A651]" />
              <span>Email</span>
            </div>
            <a
              href={`mailto:${member.email}`}
              className="block ml-5 sm:ml-6 text-xs sm:text-sm text-foreground/70 hover:text-[#00A651] transition-colors break-all"
            >
              {member.email}
            </a>
          </div>
        )}

        {/* Address */}
        <div className="space-y-1.5 sm:space-y-2">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-foreground/80">
            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00A651]" />
            <span>Adresse</span>
          </div>
          <address className="ml-5 sm:ml-6 text-xs sm:text-sm text-foreground/70 not-italic leading-relaxed whitespace-pre-line">
            {fullAddress}
          </address>
        </div>
      </div>
    </div>
  );
}

export default function TeamSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-background via-roline-light/30  to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#00A651]/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#00A651]/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-[#00A651]/10 text-[#00A651] rounded-full text-sm font-medium mb-4">
            Notre Equipe
          </span>
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-foreground mb-4 font-display">
            Les Experts Derriere Roline
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 leading-relaxed">
            Une equipe passionnee et experimentee, dediee a transformer l'agriculture de demain
          </p>
        </div>

        {/* Team Grid - Centers single card or displays grid for multiple */}
        <div className={`${teamMembers.length === 1 ? 'flex justify-center' : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'}`}>
          {teamMembers.map((member) => (
            <div key={member.id} className={teamMembers.length === 1 ? 'w-full max-w-md' : ''}>
              <TeamMemberCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
