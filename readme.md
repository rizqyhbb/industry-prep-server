# BINAR Indutry Preparation
## Case
Buatlah project dengan dengan ketentuan berikut:
- Framework Backend yang digunakan bebas.
- Framework Frontend yang digunakan adalah React atau Next.
- Database yang digunakan adalah SQL.
- Tidak boleh menggunakan ORM.
- Buat API Register & API Login yang menggunakan Authorization API Key
- Ketika berhasil, API Login akan memberikan response berupa Token JWT
- API CRUD (Create, Read, Update, Delete) sebuah data tertentu yang
menggunakan Authorization Bearer atau JWT Token.
- Data yang diolah adalah bebas, misalnya todo list, profile, barang, dll.
- Buat tampilan Register & Login yang memanggil API dari Backend.
- Buat halaman untuk menampilkan, menambah, memperbarui, dan menghapus data.
- Upload ke hasil Github.
- Cantumkan file README yang berisi penjelasan dan cara menjalankannya.

Perhatikan penamaan API, kode status response, serta format yang digunakan
dalam API.


# Backend
## API Docs
```
https://documenter.getpostman.com/view/14915691/UVeKoQA4
```
## Getting start in this backend
Before any activity make sure to install all dependencies
```
yarn
```
or
```
nmp install
```
This project using `Volta` and you can check the node and yarn that is pinned to this project on `package.json`. You can just ignore this if you have installed the same version of node in your machine as stated in pinned volta else you may want to install the same version of node to make sure everything is work.

## Setup .env and db.js
Please create `.env` file with the configuration stated in `.env example`. For database please refer to `src/config/db.js` and configure it as needed

## Table create and seeder
To start using the fully functional API, make sure to install `.sql` file placed on `sql/*.sql`