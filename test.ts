// tests go here; this will not be compiled when this package is used as an extension.
let newhex = sec.sysInfo()
let newhe = null
newhe = newhex.toHex()
serial.writeString(newhe)