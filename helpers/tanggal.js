
function tanggal_sekarang(value){
    let d  = new Date(value);
    let tgl = d.toLocaleDateString("id")

    let tamp = tgl.split("/")

    if(tamp[0] < 10){
        tamp[0] = "0"+tamp[0]
    }
    if(tamp[1] < 10){
        tamp[1] = "0"+tamp[1]
    }

    console.log(tamp[0])
    const result = tamp[2]+"-"+tamp[0]+"-"+tamp[1]
    console.log(result)

    return result
}

module.exports = tanggal_sekarang