const API_URL = `http://localhost:3000`;
const showlistthuonghieu = async () => {
    let arr = await fetch(API_URL + "/thuong_hieu")
        .then(res => res.json())
        .then(data => data);
    let str = ``; arr.forEach(row => str += show1thuonghieu(row)); return str;
};
const show1thuonghieu = (row) => {
    return `<div> <img src="${row.hinh}"> <h4>${row.ten}</h4> </div> `;
};
const showlistsanphamhot = async () => {
    let arr = await fetch(API_URL + "/san_pham_hot")
        .then(res => res.json())
        .then(data => data);
    let str = ``; arr.forEach(row => str += show1sanphamhot(row)); return str;
};
const show1sanphamhot = (sph) => {
    return `<div>   <img src="${sph.hinh}">    <h4>${sph.ten}</h4> </div> `;
};
const showlistmlb = async () => {
    let arr = await fetch(API_URL + "/mlb")
        .then(res => res.json())
        .then(data => data);
    let str = ``; arr.forEach(row => str += show1mlb(row)); return str;
};
const show1mlb = (item) => {
    return `<div>   <img src="${item.hinh}">   <h4>${item.ten}</h4> <p>${Number(item.gia).toLocaleString("vi")} VNĐ</p>  
    </div> `;
};

const showlistvans = async () => {
    let arr = await fetch(API_URL + "/vans")
        .then(res => res.json())
        .then(data => data);
    let str = ``; arr.forEach(row => str += show1vans(row)); return str;
};
const show1vans = (v) => {
    return `<div>   <img src="${v.hinh}">   <h4>${v.ten}</h4> <p>${Number(v.gia).toLocaleString("vi")} VNĐ</p>  
    </div> `;
};

const showlistblance = async () => {
    let arr = await fetch(API_URL + "/blance")
        .then(res => res.json())
        .then(data => data);
    let str = ``;
    arr.forEach(row => str += show1blance(row)); return str;
};
const show1blance = (m) => {
    return `<div>   <img src="${m.hinh}">   <h4>${m.ten}</h4> <p>${Number(m.gia).toLocaleString("vi")} VNĐ</p>  
    </div> `;
};

const showlistconverse = async () => {
    let arr = await fetch(API_URL + "/converse")
        .then(res => res.json())
        .then(data => data);
    let str = ``; arr.forEach(row => str += show1converse(row)); return str;
};
const show1converse = (c) => {
    return `<div>   <img src="${c.hinh}">   <h4>${c.ten}</h4> <p>${Number(c.gia).toLocaleString("vi")} VNĐ</p>  
    </div> `;
};

const showlistjordan = async () => {
    let arr = await fetch(API_URL + "/jordan")
        .then(res => res.json())
        .then(data => data);
    let str = ``; arr.forEach(row => str += show1jordan(row)); return str;
};
const show1jordan = (j) => {
    return `<div>   <img src="${j.hinh}">   <h4>${j.ten}</h4> <p>${Number(j.gia).toLocaleString("vi")} VNĐ</p>  
    </div> `;
};

const showlistadidas = async () => {
    let arr = await fetch(API_URL + "/adidas")
        .then(res => res.json())
        .then(data => data);
    let str = ``; arr.forEach(row => str += show1adidas(row)); return str;
};
const show1adidas = (a) => {
    return `<div>   <img src="${a.hinh}">   <h4>${a.ten}</h4> <p>${Number(a.gia).toLocaleString("vi")} VNĐ</p>  
    </div> `;
};

const showlistpuma = async () => {
    let arr = await fetch(API_URL + "/puma")
        .then(res => res.json())
        .then(data => data);
    let str = ``; arr.forEach(row => str += show1puma(row)); return str;
};
const show1puma = (p) => {
    return `<div>   <img src="${p.hinh}">   <h4>${p.ten}</h4> <p>${Number(p.gia).toLocaleString("vi")} VNĐ</p>  
    </div> `;
};

const showlistluxury = async () => {
    let arr = await fetch(API_URL + "/luxury")
        .then(res => res.json())
        .then(data => data);
    let str = ``; arr.forEach(row => str += show1luxury(row)); return str;
};
const show1luxury = (l) => {
    return `<div>   <img src="${l.hinh}">   <h4>${l.ten}</h4> <p>${Number(l.gia).toLocaleString("vi")} VNĐ</p>  
    </div> `;
};


const showlistbalo = async () => {
    let arr = await fetch(API_URL + "/balo")
        .then(res => res.json())
        .then(data => data);
    let str = ``; arr.forEach(row => str += show1balo(row)); return str;
};
const show1balo = (b) => {
    return `<div>   <img src="${b.hinh}">   <h4>${b.ten}</h4>   <p>${Number(b.gia).toLocaleString("vi")} VNĐ</p>    
    </div> `;
};

const showbanggia = async () => {
    let arr = await fetch(API_URL + "/bang_gia")
        .then(res => res.json())
        .then(data => data);
    let str = ``;
    arr.forEach(row => str += show1gia(row));
    return str;
};
const show1gia = (g) => {
    return `<div>   <p>${g.ten}</p>    <p>${Number(g.gia).toLocaleString("vi")} VNĐ</p>   </div> `;
};
export {
    showlistthuonghieu, showlistsanphamhot, showlistmlb, showlistvans, showlistbalo, showlistblance, showlistconverse,
    showlistjordan, showlistadidas, showlistpuma, showlistluxury,
};
export { showbanggia };
