/*
    Semua Tipe elemen HTML / Tag HTML = Tipenya Elemen      | <p> </p>   | <body> | <HTML>
    Isi dari Tag HTML = Text node / Simpul yang berisi text  Typenya adalah Text |  "Hello World"

    Istilah 
        - Nodelist
        - HTML Collection

    Jika memilih satu elemen dinamakan = node elemen / text
    jika lebih  dari satu maka dinamakan = node list   (tidak peduli tipenya apa)

    HTML Collection adalah kumpulan node yang tipenya Elemen HTML saja

    - Keduanya Kumpulan dari node
    - Struktur datanya mirip dengan array
    - nodelist dapat berisi node apapun, Sedangkan HTMLColection harus berisi elemen html
    - HTMLCollection bersifat live sedangkan nodelist tidak

    Struktur Hierarki DOM Tree
    - Root Node
        - Node yang menjadi sumber dari semua node lain di dalam DOM
        - Document
    
    - Parent Node    
        - node yang berada 1 tingkat diatas node yang lain
        - Jika Dua tingkat di sebut grandparent / kakek | Jika lebih namanya unsestor/ nenek moyang
        - body adalah parent dari h1, p, p, div dan a | Elemen  bisa menjadi Parent atau Child
    
    - Child Node
        - node yang berada 1 tingkat dibawah node yang lain
        - h1 adalah child dari body

    
*/
