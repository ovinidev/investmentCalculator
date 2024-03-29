import { driver } from "driver.js";

export const driverService = driver({
  showProgress: false,
  allowClose: false,
  popoverClass: "driverjs-theme",
  steps: [
    {
      element: "#name",
      popover: {
        title: "Nome",
        description:
          "Aqui possui meu nome utilizando a biblioteca vue-writer para animação de digitação.",
        side: "left",
        align: "start",
      },
    },
    {
      element: "#image",
      popover: {
        title: "Foto",
        description: "Foto utilizada nas redes sociais.",
        side: "left",
        align: "start",
      },
    },
    {
      element: "#content-1",
      popover: {
        title: "Descrição",
        description: "Aqui uma breve descrição sobre mim.",
        side: "right",
        align: "start",
      },
    },
    {
      element: "#techs",
      popover: {
        title: "Tecnologias",
        description: "Tecnologias que utilizo no meu dia a dia.",
        side: "top",
        align: "center",
      },
    },
    {
      element: "#social",
      popover: {
        title: "Social",
        description: "Links para minhas principais redes sociais.",
        side: "right",
        align: "center",
      },
    },
  ],
});
