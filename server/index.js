const express = require('express')
const app = express()
const port = 3000
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(bodyParser.json())
app.use(cors())

let count = 6
let Products =[
    {
      "id": 1,
      "image": "https://cottonon.com/on/demandware.static/-/Sites-catalog-master-women/default/dw0729b976/2053953/2053953-02-2.jpg",
      "info": "gray",
      "name": "hoodie",
      "price": "150"
    },
    {
      "id": 2,
      "image": "https://images.asos-media.com/products/pullbear-join-life-hoodie-in-yellow/23436353-1-yellow?$n_640w$&wid=513&fit=constrain",
      "info": "yellow",
      "name": "hoodie",
      "price": "100"
    },
    {
      "id": 3,
      "image": "https://rukminim2.flixcart.com/image/850/1000/xif0q/sweatshirt/2/q/5/m-bw-hdo1-bellwit-original-imagkb3zgmxgkakh.jpeg?q=20",
      "info": "red",
      "name": "hoodie",
      "price": "46"
    },
    {
      "id": 5,
      "image": "https://www.pro5usa.com/cdn/shop/products/black_hood_shop_grande.jpg?v=1527322942",
      "info": "black",
      "name": "hoodie",
      "price": "754"
    },
    {
      "id": 6,
      "image": "https://inyourshoe.com/cdn/shop/products/blue-hoodie-plain-hoodies-in-your-shoe-243676.jpg?v=1668057716&width=1946",
      "info": "blue",
      "name": "hoodie",
      "price": "753"
    },
    {
      "id": 7,
      "image": "https://eu.representclo.com/cdn/shop/products/SCALED__0010_54STUDIOSHOOT1598_0003_54STUDIOSHOOT12112_1200x1200.jpg?v=1685533313",
      "info": "green",
      "name": "hoodie",
      "price": "8564"
    },
    {
      "id": 8,
      "image": "https://cdn-img.prettylittlething.com/c/a/f/2/caf26e8ef271768b4a8e7caa1e33f86193c0989e_cms6543_1.jpg",
      "info": "pink",
      "name": "hoodie",
      "price": "738"
    },
    {
      "id": 10,
      "image": "https://inyourshoe.com/cdn/shop/products/purple-hoodie-plain-hoodies-in-your-shoe-629478.jpg?v=1668057294",
      "info": "purple",
      "name": "hoodie",
      "price": "64"
    },
    {
      "id": 10,
      "image": "https://inyourshoe.com/cdn/shop/products/white-hoodie-plain-hoodies-in-your-shoe-879927.jpg?v=1668057935",
      "info": "white",
      "name": "hoodie",
      "price": "457"
    },
    {
      "id": 11,
      "image": "https://getketchadmin.getketch.com/product/8905745239697/660/KHSS000101_1.jpg",
      "info": "brown",
      "name": "hoodie",
      "price": "368"
    },
    {
      "id": 12,
      "image": "https://bronzesnake.com/cdn/shop/files/230627_BRONZE8396.jpg?v=1687829136",
      "info": "coral",
      "name": "hoodie",
      "price": "196"
    },
    {
      "id": 13,
      "image": "https://rukminim1.flixcart.com/image/850/800/xif0q/shopsy-shoe/6/r/b/7-duggu40-foxi-fashion-black-original-imaggtsvwam2tqvm.jpeg?q=90",
      "info": "black",
      "name": "shoes",
      "price": "129"
    },
    {
      "id": 14,
      "image": "https://assets.ajio.com/medias/sys_master/root/20230621/s8f6/64928ba5d55b7d0c63909f51/-473Wx593H-464114535-white-MODEL8.jpg",
      "info": "white",
      "name": "shoes",
      "price": "122"
    },
    {
      "id": 15,
      "image": "https://cfcdn.zulily.com/images/cache/product/488850/zu96953163_main_tm1623939150.jpg",
      "info": "yellow",
      "name": "shoes",
      "price": "103"
    },
    {
      "id": 16,
      "image": "https://baccabucci.com/cdn/shop/products/1_2_ce2356e2-5e7e-412e-98be-6651f2591ae0.jpg?v=1660822610",
      "info": "gray",
      "name": "shoes",
      "price": "130"
    },
    {
      "id": 17,
      "image": "https://gloimg.drlcdn.com/L/pdm-product-pic/Clothing/2023/02/22/source-img/20230222092016_63f56dd0ef1cf.jpg?im_scale=w580_1x",
      "info": "green",
      "name": "shoes",
      "price": "100"
    },
    {
      "id": 18,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo7Z9yCi6yxahQuY50tszsVo1QJYIIoDyMMwIvxQT1h7arTlSnpbW1o1V36R3qu9vi6Vw&usqp=CAU",
      "info": "brown",
      "name": "shoes",
      "price": "200"
    },
    {
      "id": 19,
      "image": "https://rukminim2.flixcart.com/image/850/1000/kyag87k0/shoe/i/w/j/5-1-1521-pink-38-longwalk-pink-original-imagak3mhymebfuh.jpeg?q=20",
      "info": "pink",
      "name": "shoes",
      "price": "1300"
    },
    {
      "id": 20,
      "image": "https://in.elevarsports.com/cdn/shop/products/Elevar_Sports_Men_ARC_Racer_Cobalt_Blue_Hero_5af0288d-0121-435d-9538-8115e060eda1_1500x.jpg?v=1694108887",
      "info": "blue",
      "name": "shoes",
      "price": "100"
    },
    {
      "id": 21,
      "image": "https://img.ltwebstatic.com/images3_pi/2022/06/27/16563106979e389bde996ed7aafaaeebb15f2d68d8_thumbnail_720x.webp",
      "info": "red",
      "name": "shoes",
      "price": "1050"
    },
    {
      "id": 21,
      "image": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/12288052/2020/8/24/3762e8bb-73a5-4319-8d29-95315c7697591598268731486-SASSAFRAS-Women-White-Regular-Fit-Solid-Parallel-Trousers-88-1.jpg",
      "info": "white",
      "name": "trausers",
      "price": "80"
    },
    {
      "id": 22,
      "image": "https://assets.ajio.com/medias/sys_master/root/20230629/WnKx/649ce976a9b42d15c91f4583/-1117Wx1400H-466086897-black-MODEL.jpg",
      "info": "black",
      "name": "trausers",
      "price": "10"
    },
    {
      "id": 23,
      "image": "https://img.ltwebstatic.com/images/pi/201709/1c/15046913636020160355.webp",
      "info": "red",
      "name": "trausers",
      "price": "100"
    },
    {
      "id": 24,
      "image": "https://imagescdn.planetfashion.in/img/app/product/7/790395-9250668.jpg?auto=format",
      "info": "blue",
      "name": "trausers",
      "price": "1100"
    },
    {
      "id": 25,
      "image": "https://rukminim2.flixcart.com/image/850/1000/kdakakw0/trouser/i/j/h/32-441001916-brown-john-players-original-imafu8daun2rneqs.jpeg?q=20",
      "info": "coral",
      "name": "trausers",
      "price": "1020"
    },
    {
      "id": 26,
      "image": "https://cottonworld.net/cdn/shop/products/cottonworld-men-s-pants-men-s-cotton-lycra-brown-slim-fit-pants-15659377492021.jpg?v=1597075880",
      "info": "brown",
      "name": "trausers",
      "price": "10"
    },
    {
      "id": 27,
      "image": "https://thehouseofrare.com/cdn/shop/products/IMG_0355_79e1f30e-e6c1-4643-97af-9176411731a9.jpg?v=1693566201",
      "info": "gray",
      "name": "trausers",
      "price": "1020"
    },
    {
      "id": 28,
      "image": "https://cdn11.bigcommerce.com/s-4wjdge/images/stencil/original/products/411/2416/Double_Button_Pant_Yellow_4__13761.1687454303.jpg?c=2",
      "info": "yellow",
      "name": "trausers",
      "price": "120"
    },
    {
      "id": 29,
      "image": "https://cdn-img.prettylittlething.com/d/d/0/2/dd0255b6ec021d0b322e0a10b83f2446af88b324_cmv5047_2.jpg",
      "info": "green",
      "name": "trausers",
      "price": "130"
    },
    {
      "id": 30,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuHbz54p5SkFAyrAFTvmtTaFIr_TSYHwLO8Q&usqp=CAU",
      "info": "pink",
      "name": "trausers",
      "price": "1000"
    }
]


app.get('/', (req, res) => {
    res.send(Products)
})


// ----------------GET-------------------

app.get('/:id', (req, res) => {
    const { id } = req.params
    const getUser = Products.find(x => x.id === +id)
    res.send(getUser)
})

// ----------------DELETE-------------------

app.delete('/:id', (req, res) => {
    const { id } = req.params
    const deleteUser = Products.filter(x => x.id !== +id)
    res.send(deleteUser)
})

// ----------------CREATE-------------------

app.post('/', (req, res) => {
    Products.push({ id: count++, ...req.body })
    console.log(req.body);
    res.send(Products)
})

// ----------------UPDATE-------------------

app.put('/:id', (req, res) => {
    const { id } = req.params
    const index = Products.findIndex(x => x.id !== +id)
    Products[index] = { id: +id, ...req.body }
    res.send(Products)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})