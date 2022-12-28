
function tanggal_sekarang(value){
    let arrbulan = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
    let d  = new Date(value);
    let tgl = d.toLocaleDateString("id")

    let tamp = tgl.split("/")

    const result = tamp[1]+" "+arrbulan[parseInt(tamp[0]-1)]+" "+tamp[2]

    return result
}

module.exports = tanggal_sekarang