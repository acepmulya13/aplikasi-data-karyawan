const {Persone} = require('../models')
const tgl = require('../helpers/tanggal')
const umur = require('../helpers/umur')
const tmp  = require('../helpers/tampil')

class Controller{

    static show(req,res){
        Persone.findAll()
        .then((data)=>{
            res.render('show', {data, umur, tmp})
        })
        .catch((err)=>{
            res.send("Maaf Databasese Kosong atau bermasalah")
        })
    }

    static add(req,res){
        res.render('add')
    }

    static addPost(req,res){
        const data_karyawan = {
            NIK             : req.body.nik,
            Nama_Lengkap    : req.body.nama,
            Jenis_Kelamin   : req.body.jenis_kelamin,
            Tanggal_Lahir   : req.body.tanggal_lahir,
            Alamat          : req.body.alamat,
            Negara          : req.body.negara
        }

        Persone.create(data_karyawan)
        .then((data)=>{
            res.redirect('/')
        })
        .catch((err)=>{
            res.send("Maaf Data Baru" + data_karyawan.Nama_Lengkap + "Gagal di Buat")
        })
    }

    static edit(req,res){
        let id = +req.params.id
        Persone.findByPk(id)
            .then((data) =>{
                console.log(data)
                res.render('edit', {data, tgl})
            })
            .catch((err)=>{
                res.send("Data Pribadi tidak ditemukan")
            })
    }

    static editPost(req,res){
        let id = +req.params.id
        const data_karyawan = {
            Nama_Lengkap    : req.body.nama,
            Jenis_Kelamin   : req.body.jenis_kelamin,
            Tanggal_Lahir   : req.body.tanggal_lahir,
            Alamat          : req.body.alamat,
            Negara          : req.body.negara
        }

        Persone.update(data_karyawan,{
            where : {
                id : id
            },
            returning : true
        })
        .then((data)=>{
            res.redirect('/')
        })
        .catch((err)=>{
            res.send("Maaf Data Dengan" + data_karyawan.Nama_Lengkap + "Gagal di Ubah")
        })
    }

    static destroy(req,res){
        let id = +req.params.id
        Persone.destroy({
            where : {
                id : id
            }
        })
            .then((data)=>{
                res.redirect('/')
            })
            .catch((err)=>{
                res.send("Maaf Data Pribadi tidak dapat di hapus")
            })
    }

    static find(req,res){
        let nik  = req.body.nik
        let nama = req.body.nama

        if(nik && nama){
            Persone.findAll({
                where : {
                    NIK: nik,
                    Nama_Lengkap: nama
                }
            })
            .then((data)=>{
                res.render('show',{data,umur,tmp})
            })
            .catch((err)=>{
                res.send("Data Tidak Ditemukan")
            })
        }else if(nik && !nama){
            Persone.findAll({
                where : {
                    NIK: nik,
                }
            })
            .then((data)=>{
                res.render('show',{data,umur,tmp})
            })
            .catch((err)=>{
                res.send("Data Tidak Ditemukan")
            })
        }else if(!nik && nama){
            Persone.findAll({
                where : {
                    Nama_Lengkap: nama
                }
            })
            .then((data)=>{
                res.render('show',{data,umur,tmp})
            })
            .catch((err)=>{
                res.send("Data Tidak Ditemukan")
            })
        }else if(!nik && !nama){
            res.send("Isi Nik dan Nama Lengkap")
        }else{
            res.send("Data Tidak ditemukan")
        }

        
    }

}
module.exports = Controller