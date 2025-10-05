const productos = [
  {
    id: "1",
    nombre: "Lavarropas Smartlife",
    descripcion: "Lavarropas Automático Smartlife 6kg Inverter Slim Design",
    precio: 700000,
    imagen: {
      alt: "lavarropas",
      url: "https://images.fravega.com/f500/fa671977e7f813967581693aa1fc9c0b.png"
    },
    stock: 10,
    categoria: "lavado"
  },
  {
    id: "2",
    nombre: "Cafetera Expresso Suono",
    descripcion: "Cafetera Expresso Digital Suono Automática Acero Inox 1.5 L Color Plateado",
    precio: 180000,
    imagen: {
      alt: "cafetera",
      url: "https://http2.mlstatic.com/D_NQ_NP_943076-MLU77738040185_072024-O.webp"
    },
    stock: 30,
    categoria: "pequenosElectrodomesticos"
  },
  {
    id: "3",
    nombre: "Freidora de aire Suono",
    descripcion: "Freidora De Aire Suono Sin Aceite Air Fryer Led Digital 1450 W 3.8 L Color Negro Temporizador Cocción rápida Recalentar 8 programas",
    precio: 60000,
    imagen: {
      alt: "freidoraDeAire",
      url: "https://http2.mlstatic.com/D_NQ_NP_896632-MLU75949044985_042024-O.webp"
    },
    stock: 25,
    categoria: "pequenosElectrodomesticos"
  },
  {
    id: "4",
    nombre: "Mini Heladera Portátil Gadnic",
    descripcion: "Mini Heladera Portátil Gadnic 10l Frío Calor Para Cosméticos Color Negro",
    precio: 110000,
    imagen: {
      alt: "heladera",
      url: "https://http2.mlstatic.com/D_NQ_NP_860978-MLA89950114799_082025-O.webp"
    },
    stock: 15,
    categoria: "refrigeracion"
  },
  {
    id: "5",
    nombre: "Centrifugadora koh-i-noor",
    descripcion: "Secarropas centrífugo Koh-i-noor Black N-655 eléctrico 5.5kg negro",
    precio: 320000,
    imagen: {
      alt: "centrifugadora",
      url: "https://http2.mlstatic.com/D_NQ_NP_909766-MLA92132470199_092025-O.webp"
    },
    stock: 8,
    categoria: "lavado"
  },
  {
    id: "6",
    nombre: "Heladera Freezer Samsung",
    descripcion: "Heladera Freezer Superior Samsung No Frost 382 L Rt38k5932sl Color Inox",
    precio: 1200000,
    imagen: {
      alt: "heladeraSamsung",
      url: "https://http2.mlstatic.com/D_NQ_NP_685254-MLA84552013724_052025-O.webp"
    },
    stock: 20,
    categoria: "refrigeracion"
  },
];

export const obtenerProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 1500)
  })
}

export const obtenerProductoPorId = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = productos.find(item => item.id === id)
      resolve(producto);
    }, 200)
  })
}

export const obtenerProductosPorCategoria = (categoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productosPorCategoria = productos.filter(item => item.categoria === categoria)
      resolve(productosPorCategoria);
    }, 500)
  })
}

export const formatearMoneda = (numero) => {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0
  }).format(numero);
}
