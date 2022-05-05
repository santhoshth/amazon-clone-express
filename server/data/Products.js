const products = [
    {
        title: "Redmi Note 11 (Space Black, 6GB RAM, 64GB Storage) | 90Hz FHD+ AMOLED Display | Qualcomm® Snapdragon™ 680-6nm",
        price: 13999,
        image: "https://i01.appmifile.com/webfile/globalimg/Iris/redmi-note-11-black.png",
        rating: 5,
        countInStock: 12,
        numReviews: 4,
        category: "smartphones",
    },
    {
        title: "OPPO A31 (Mystery Black, 6GB RAM, 128GB Storage)",
        price: 11999,
        image: "https://opsg-img-cdn-gl.heytapimg.com/epb/202112/07/Umvpw3OmyfxnSyXN.jpg",
        rating: 4,
        countInStock: 20,
        numReviews: 4,
        category: "smartphones",
    },
    {
        title: "Samsung Galaxy M53 5G (Mystique Green, 6GB, 128GB Storage) | Travel Adapter to be Purchased Separately",
        price: 26499,
        image: "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/FQN_jHgakAMh38p.jpg",
        rating: 5,
        countInStock: 14,
        numReviews: 3,
        category: "smartphones",
    },
    {
        title: "realme narzo 50i (Mint Green, 4GB RAM+64GB Storage)",
        price: 8999,
        image: "https://image01.realme.net/general/20210916/1631776475968.png",
        rating: 3,
        countInStock: 8,
        numReviews: 3,
        category: "smartphones",
    },
    {
        title: "Apple iPhone 13 (128GB) - Midnight",
        price: 64900,
        image: "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/530257-Product-0-I-637672978948824210_0f99273a-d3e6-4727-9793-f2ecf7c3988d_800x800.jpg?v=1648609692",
        rating: 5,
        countInStock: 5,
        numReviews: 6,
        category: "smartphones",
    },
    {
        title: "Redmi Note 10S (Shadow Black, 6GB RAM, 64GB Storage) - Super Amoled Display | 64 MP Quad Camera ",
        price: 14999,
        image: "https://m.media-amazon.com/images/I/71oieHcp4WL._SL1500_.jpg",
        rating: 5,
        countInStock: 9,
        numReviews: 10,
        category: "smartphones",
    },
    {
        title: "Rich Dad Poor Dad by Robert T.Kiyosaki",
        price: 299,
        image: "https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg",
        rating: 5,
        countInStock: 30,
        numReviews: 6,
        category: "books",
    },
    {
        title: "Deception Point by Dan Brown",
        price: 300,
        image: "https://images-na.ssl-images-amazon.com/images/I/61MKKdDbJlL.jpg",
        rating: 5,
        countInStock: 20,
        numReviews: 2,
        category: "books",
    },
    {
        title: "The Intelligent Investor by Benjamin Graham",
        price: 448,
        image: "https://images-na.ssl-images-amazon.com/images/I/919mmNCTaaL.jpg",
        rating: 4,
        countInStock: 14,
        numReviews: 2,
        category: "books",
    },
    {
        title: "Essentialism: The Disciplined Pursuit of Less by Greg Mckeown",
        price: 449,
        image: "https://images-na.ssl-images-amazon.com/images/I/81WSjTD7HLL.jpg",
        rating: 4,
        countInStock: 14,
        numReviews: 2,
        category: "books",
    },
    {
        title: "Principles: Life and Work by Ray Dalio",
        price: 886,
        image: "https://images-na.ssl-images-amazon.com/images/I/71wAI5TwNsL.jpg",
        rating: 5,
        countInStock: 6,
        numReviews: 2,
        category: "books",
    },
    {
        title: "Apple Watch SE (GPS, 40mm) - Space Grey Aluminium Case with Midnight Sport Band - Regular",
        price: 28405,
        image: "https://m.media-amazon.com/images/I/71Pln-8awPL._SX679_.jpg",
        rating: 5,
        countInStock: 20,
        numReviews: 2,
        category: "gadgets",
    },
    {
        title: "Echo Dot (3rd Gen) - #1 smart speaker brand in India with Alexa (Black)",
        price: 3499,
        image: "https://5.imimg.com/data5/NE/JM/MY-23727919/deal-get-two-amazon-echo-dots-3rd-gen-for-50-500x500.jpg",
        rating: 4,
        countInStock: 15,
        numReviews: 5,
        category: "gadgets",
    },
    {
        title: "2021 Apple iPad Pro with Apple M1 chip (12.9-inch/32.77 cm, Wi-Fi + Cellular, 256GB) - Space Grey (5th Generation)",
        price: 120000,
        image: "https://m.media-amazon.com/images/I/81Y5WuARqpS._SL1500_.jpg",
        rating: 5,
        countInStock: 7,
        numReviews: 1,
        category: "gadgets",
    },
    {
        title: "2020 Apple MacBook Pro (13.3-inch/33.78 cm, 8GB RAM, 256GB SSD) - Space Grey",
        price: 107999,
        image: "https://m.media-amazon.com/images/I/71an9eiBxpL._AC_SL1500_.jpg",
        rating: 4.5,
        countInStock: 9,
        numReviews: 10,
        category: "gadgets",
    },
    {
        title: "Lenovo IdeaPad S540 10th Gen Intel Core i5 15.6'(39.62cms) Full HD IPS T&L Laptop 81NG00BVIN",
        price: 70999,
        image: "https://m.media-amazon.com/images/I/911dhIY2SCL._SL1500_.jpg",
        rating: 5,
        countInStock: 4,
        numReviews: 2,
        category: "gadgets",
    },
    {
        title: "Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)",
        price: 160000,
        image: "https://m.media-amazon.com/images/I/71MlcO29QOL._SL1500_.jpg",
        rating: 5,
        countInStock: 2,
        numReviews: 0,
        category: "gadgets",
    },
    {
        title: "Deception Point by Dan Brown",
        price: 300,
        image: "https://images-na.ssl-images-amazon.com/images/I/61MKKdDbJlL.jpg",
        rating: 5,
        countInStock: 20,
        numReviews: 2,
        category: "others",
    },
    {
        title: "Echo Dot (3rd Gen) - #1 smart speaker brand in India with Alexa (Black)",
        price: 3499,
        image: "https://5.imimg.com/data5/NE/JM/MY-23727919/deal-get-two-amazon-echo-dots-3rd-gen-for-50-500x500.jpg",
        rating: 4,
        countInStock: 15,
        numReviews: 5,
        category: "others",
    },
    {
        title: "2021 Apple iPad Pro with Apple M1 chip (12.9-inch/32.77 cm, Wi-Fi + Cellular, 256GB) - Space Grey (5th Generation)",
        price: 120000,
        image: "https://m.media-amazon.com/images/I/81Y5WuARqpS._SL1500_.jpg",
        rating: 5,
        countInStock: 7,
        numReviews: 1,
        category: "others",
    },
    {
        title: "Redmi Note 10S (Shadow Black, 6GB RAM, 64GB Storage) - Super Amoled Display | 64 MP Quad Camera ",
        price: 14999,
        image: "https://m.media-amazon.com/images/I/71oieHcp4WL._SL1500_.jpg",
        rating: 5,
        countInStock: 9,
        numReviews: 10,
        category: "others",
    },
    {
        title: "Lenovo IdeaPad S540 10th Gen Intel Core i5 15.6'(39.62cms) Full HD IPS T&L Laptop 81NG00BVIN",
        price: 70999,
        image: "https://m.media-amazon.com/images/I/911dhIY2SCL._SL1500_.jpg",
        rating: 5,
        countInStock: 4,
        numReviews: 2,
        category: "others",
    },
    {
        title: "Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)",
        price: 160000,
        image: "https://m.media-amazon.com/images/I/71MlcO29QOL._SL1500_.jpg",
        rating: 5,
        countInStock: 2,
        numReviews: 0,
        category: "others",
    }

];

export default products;