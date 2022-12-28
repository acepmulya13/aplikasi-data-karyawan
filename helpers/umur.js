
function umur(value){
    let d  = new Date(value);
    let tgl = d.toLocaleDateString("id")

    let tamp = tgl.split("/")
    let tahun = new Date().getFullYear();

    const usia_skr = parseInt(tahun)-parseInt(tamp[2])

    return usia_skr
}

module.exports = umur