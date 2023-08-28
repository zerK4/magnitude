export const components: {
    name: string;
    image: string;
    items?: { title: string; href: string }[];
  }[] = [
    {
      name: "Despre noi",
      image: "/assets/trainer.jpg",
      items: [
        {
          title: "Cine suntem?",
          href: "/despre-noi/cine-suntem",
        },
        {
          title: "Instructori",
          href: "/despre-noi/instructori",
        },
      ],
    },
    {
      name: "Cursuri",
      image: "/assets/courses.jpg",
      items: [
        {
          title: "Orar",
          href: "#",
        },
        {
          title: "Afro-Latin",
          href: "#",
        },
        {
          title: "Dansuri Carraibice",
          href: "#",
        },
        {
          title: "Servicii Private",
          href: "#",
        },
      ],
    },
    {
      name: "Social Parties",
      image: "/assets/social-parties.jpg",
      items: [
        {
          title: "Social Practice",
          href: "#",
        },
        {
          title: "Fiesta Latina",
          href: "#",
        },
        {
          title: "Kizz Night",
          href: "#",
        },
      ],
    },
    {
      name: "Galerie",
      image: "/assets/trainer.jpg",
      items: [
        {
          title: "Poze",
          href: "#",
        },
        {
          title: "Video",
          href: "#",
        },
      ],
    },
    {
      name: "Contact",
      image: "/assets/trainer.jpg",
      items: [
        {
          title: "Contacteaza-ne",
          href: "#",
        },
        {
          title: "Inscrieri",
          href: "#",
        },
      ],
    },
  ];