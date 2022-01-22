import { createServer, Model } from "miragejs"

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    models: {
      contact: Model,
    },

    seeds(server) {
      server.create("contact", {
        id: 1,
        name: "Leanne Graham",
        phone: "1-770-736-8031 x56442",
      })
      server.create("contact", {
        id: 2,
        name: "Ervin Howell",
        phone: "010-692-6593 x09125"
      })
      server.create("contact", {
        id: 3,
        name: "Clementine Bauch",
        phone: "1-463-123-4447",
      })
      server.create("contact", {
        id: 4,
        name: "Patricia Lebsack",
        phone: "493-170-9623 x156",
      })
      server.create("contact", {
        id: 5,
        name: "Chelsey Dietrich",
        phone: "(254)954-1289",
      })
      server.create("contact", {
        id: 6,
        name: "Mrs. Dennis Schulist",
        phone: "1-477-935-8478 x6430",
      })
      server.create("contact", {
        id: 7,
        name: "Kurtis Weissnat",
        phone: "210.067.6132",
      })
    },

    routes() {
      this.namespace = "api"

      this.get("/contacts", (schema) => {
        return schema.contacts.all()
      })
    },
  })

  return server
}