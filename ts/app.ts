const API_URL = `http://localhost:3000`;
type TThuongHieu = { id: number; ten: string; hinh: string; }
type TSanPhamHot = { id: number; ten: string; hinh: string; }
type TMlb = { id: number; ten: string; hinh: string; gia: number; }
type TVans = { id: number; ten: string; hinh: string; gia: number; }
type TBlance = { id: number; ten: string; hinh: string; gia: number; }
type TConverse = { id: number; ten: string; hinh: string; gia: number; }
type TJordan = { id: number; ten: string; hinh: string; gia: number; }
type TAdidas = { id: number; ten: string; hinh: string; gia: number; }
type TPuma = { id: number; ten: string; hinh: string; gia: number; }
type TLuxury = { id: number; ten: string; hinh: string; gia: number; }
type TBalo = { id: number; ten: string; hinh: string; gia: number; }
type TBangGia = { id: number; ten: string; gia: number; }

const showlistthuonghieu = async () => {
    let arr: TThuongHieu[] = await fetch(API_URL + "/thuong_hieu")
        .then(res => res.json())
        .then(data => data as TThuongHieu[]);
    let str = ``; arr.forEach(row => str += show1thuonghieu(row))
    return str;
}
const show1thuonghieu = (row: TThuongHieu) => {
    return `<div>
                <img src="${row.hinh}">
                <h4>${row.ten}</h4>
            </div> `;
}

const showlistsanphamhot = async () => {
    let arr: TSanPhamHot[] = await fetch(API_URL + "/san_pham_hot")
        .then(res => res.json())
        .then(data => data as TSanPhamHot[]);
    let str = ``; arr.forEach(row => str += show1sanphamhot(row))
    return str;
}
const show1sanphamhot = (sph: TSanPhamHot) => {
    return `<div>
    <img src="${sph.hinh}">
    <h4>${sph.ten}</h4>
    </div> `;
}

const showlistmlb = async () => {
    let arr: TMlb[] = await fetch(API_URL + "/mlb")
        .then(res => res.json())
        .then(data => data as TMlb[]);
    let str = ``; arr.forEach(row => str += show1mlb(row))
    console.log(arr);
    
    return str;
}
const show1mlb = (m: TMlb) => {
    return `<div>
    <img src="${m.hinh}">
    <h4>${m.ten}</h4>
    </div> `;
}

const showlistvans = async () => {
    let arr: TVans[] = await fetch(API_URL + "/vans")
        .then(res => res.json())
        .then(data => data as TVans[]);
    let str = ``; arr.forEach(row => str += show1vans(row))
    return str;
}
const show1vans = (v: TVans) => {
    return `<div>
    <img src="${v.hinh}">
    <h4>${v.ten}</h4>
    <p>${Number(v.gia).toLocaleString("vi")} VNĐ</p>
    </div> `;
}

const showlistblance = async () => {
    let arr: TBlance[] = await fetch(API_URL + "/blance")
        .then(res => res.json())
        .then(data => data as TBlance[]);
    let str = ``; arr.forEach(row => str += show1blance(row))
    return str;
}
const show1blance = (b: TBlance) => {
    return `<div>
    <img src="${b.hinh}">
    <h4>${b.ten}</h4>
    <p>${Number(b.gia).toLocaleString("vi")} VNĐ</p>
    </div> `;
}

const showlistconverse = async () => {
    let arr: TConverse[] = await fetch(API_URL + "/converse")
        .then(res => res.json())
        .then(data => data as TConverse[]);
    let str = ``; arr.forEach(row => str += show1converse(row))
    return str;
}
const show1converse = (c: TConverse) => {
    return `<div>
    <img src="${c.hinh}">
    <h4>${c.ten}</h4>
    <p>${Number(c.gia).toLocaleString("vi")} VNĐ</p>
    </div> `;
}

const showlistjordan = async () => {
    let arr: TJordan[] = await fetch(API_URL + "/jordan")
        .then(res => res.json())
        .then(data => data as TJordan[]);
    let str = ``; arr.forEach(row => str += show1jordan(row))
    return str;
}
const show1jordan = (j: TJordan) => {
    return `<div>
    <img src="${j.hinh}">
    <h4>${j.ten}</h4>
    <p>${Number(j.gia).toLocaleString("vi")} VNĐ</p>
    </div> `;
}

const showlistadidas = async () => {
    let arr: TAdidas[] = await fetch(API_URL + "/adidas")
        .then(res => res.json())
        .then(data => data as TAdidas[]);
    let str = ``; arr.forEach(row => str += show1adidas(row))
    return str;
}
const show1adidas = (a: TAdidas) => {
    return `<div>
    <img src="${a.hinh}">
    <h4>${a.ten}</h4>
    <p>${Number(a.gia).toLocaleString("vi")} VNĐ</p>
    </div> `;
}

const showlistpuma = async () => {
    let arr: TPuma[] = await fetch(API_URL + "/puma")
        .then(res => res.json())
        .then(data => data as TPuma[]);
    let str = ``; arr.forEach(row => str += show1puma(row))
    return str;
}
const show1puma = (p: TPuma) => {
    return `<div>
    <img src="${p.hinh}">
    <h4>${p.ten}</h4>
    <p>${Number(p.gia).toLocaleString("vi")} VNĐ</p>
    </div> `;
}

const showlistluxury = async () => {
    let arr: TLuxury[] = await fetch(API_URL + "/luxury")
        .then(res => res.json())
        .then(data => data as TLuxury[]);
    let str = ``; arr.forEach(row => str += show1luxury(row))
    return str;
}
const show1luxury = (l: TLuxury) => {
    return `<div>
    <img src="${l.hinh}">
    <h4>${l.ten}</h4>
    <p>${Number(l.gia).toLocaleString("vi")} VNĐ</p>
    </div> `;
}

const showlistbalo = async () => {
    let arr: TBalo[] = await fetch(API_URL + "/balo")
        .then(res => res.json())
        .then(data => data as TBalo[]);
    let str = ``; arr.forEach(row => str += show1balo(row))
    return str;
}
const show1balo = (b: TBalo) => {
    return `<div>
    <img src="${b.hinh}">
    <h4>${b.ten}</h4>
    <p>${Number(b.gia).toLocaleString("vi")} VNĐ</p>
    </div> `;
}


const showbanggia = async () => {
    let arr: TBangGia[] = await fetch(API_URL + "/bang_gia")
        .then(res => res.json())
        .then(data => data as TBangGia[]);
    let str = ``; arr.forEach(row => str += show1gia(row))
    return str;
}
const show1gia = (g: TBangGia) => {
    return `<div>
     <p>${g.ten}</p>
     <p>${Number(g.gia).toLocaleString("vi")} VNĐ</p>
    </div> `;
}



export {
    showlistthuonghieu, showlistsanphamhot, showlistmlb, showlistvans, showlistblance, showlistconverse,
    showlistjordan, showlistadidas, showlistpuma, showlistluxury, showlistbalo,
}
export { showbanggia }