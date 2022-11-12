const { createApp } = Vue

  createApp({
    data() {
      return {
        events:[
            {
            img:"image1.jpeg",
            description:"En el mes del Orgullo y del 10° aniversario de Ciervos Pampas Rugby Club, @scrumespn estuvo presente en nuestro entrenamiento! #MesDelOrgullo #CiervosPampasWeb",
            date: "27 de junio",
            link:"https://www.instagram.com/p/CfUEw-jOLPl/"
            },
            {
                img:"image2.jpeg",
                description:"#Efeméride 17 de mayo / Día Internacional contra la LGBTIFobia. 🏳️‍🌈Desde Ciervos Pampas promovemos el acceso al Deporte como derecho, un deporte libre de toda forma de discriminación y violencia.#CiervosPampasWeb ",
                date:"17 de mayo",
                link:"https://www.instagram.com/p/Cdqaeg_u4Uz/"
            },
            {
                img:"image3.jpeg",
                description:"🏳️‍🌈 Súmate a marchar junto a nosotros en esta marcha N° XXXI! 🏳️‍🌈 Nuestro camión celebrando los 10 años de Ciervos Pampas! 🏳️‍🌈 Nos encontramos a las 16 hs. en Diagonal Norte ✨ #CiervosPampasWeb.",
                date:"5 de noviembre",
                link:"https://www.instagram.com/p/CkiqK28OXwn/"
            },
            {
                img:"image4.jpeg",
                description:"🏳️‍🌈 Este domingo 30/10 participamos del evento de @orgulloylucha, con música y performances de Artistxs excelentes, como inicio a la semana del Orgullo. 🏳️‍🌈 Te invitamos a marchar junto a nosotros y nuestro camión celebrando los 10 años de Ciervos Pampas, el día 5 de noviembre, en la calle Diagonal Norte a las 16 hs! #CiervosPampasWeb",
                date:"1 de noviembre",
                link:"https://www.instagram.com/p/CkbHnOAuKjb/"
            }
        ]
      }
    },
    methods:{
        descriptionNormalicer(text){
            text = text.slice(0,120)
            return text
        },
    }
  }).mount('#app')