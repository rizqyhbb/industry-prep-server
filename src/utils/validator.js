const isEmpty = (str) => {
  if (str === "")
    return true
}

module.exports = {
  isEmpty
}




// (str === "" || !str.replace(/\s/g, '').length)