// script.js

class SinhVien {
    constructor(ma, ten, gioiTinh, ngaySinh, queQuan) {
        this.ma = ma;
        this.ten = ten;
        this.gioiTinh = gioiTinh;
        this.ngaySinh = ngaySinh;
        this.queQuan = queQuan;
    }
}

class QuanLySinhVien {
    constructor() {
        this.sinhViens = JSON.parse(localStorage.getItem('sinhViens')) || [];
        this.maHienTai = null;
        this.hienThiBang();
    }

    themSinhVien(sinhVien) {
        if (this.maHienTai !== null) {
            const index = this.sinhViens.findIndex(sv => sv.ma === this.maHienTai);
            this.sinhViens[index] = sinhVien;
            this.maHienTai = null;
        } else {
            this.sinhViens.push(sinhVien);
        }
        this.luuSinhVien();
        this.hienThiBang();
    }

    suaSinhVien(ma) {
        const sinhVien = this.sinhViens.find(sv => sv.ma === ma);
        if (sinhVien) {
            document.getElementById('ma-sinh-vien').value = sinhVien.ma;
            document.getElementById('ho-ten').value = sinhVien.ten;
            document.getElementById('gioi-tinh').value = sinhVien.gioiTinh;
            document.getElementById('ngay-sinh').value = sinhVien.ngaySinh;
            document.getElementById('que-quan').value = sinhVien.queQuan;
            this.maHienTai = ma;
        }
    }

    xoaSinhVien(ma) {
        this.sinhViens = this.sinhViens.filter(sv => sv.ma !== ma);
        this.luuSinhVien();
        this.hienThiBang();
    }

    hienThiBang() {
        const tbody = document.querySelector('#bang-sinh-vien tbody');
        tbody.innerHTML = '';
        this.sinhViens.forEach(sinhVien => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${sinhVien.ma}</td>
                <td>${sinhVien.ten}</td>
                <td>${sinhVien.gioiTinh}</td>
                <td>${sinhVien.ngaySinh}</td>
                <td>${sinhVien.queQuan}</td>
                <td>
                    <button class="sua" onclick="quanLySinhVien.suaSinhVien('${sinhVien.ma}')">Sửa</button>
                    <button class="xoa" onclick="quanLySinhVien.xoaSinhVien('${sinhVien.ma}')">Xóa</button>
                </td>
            `;
            tbody.appendChild(row);
        });
    }

    luuSinhVien() {
        localStorage.setItem('sinhViens', JSON.stringify(this.sinhViens));
    }
}

const quanLySinhVien = new QuanLySinhVien();

document.getElementById('student-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const ma = document.getElementById('ma-sinh-vien').value;
    const ten = document.getElementById('ho-ten').value;
    const gioiTinh = document.getElementById('gioi-tinh').value;
    const ngaySinh = document.getElementById('ngay-sinh').value;
    const queQuan = document.getElementById('que-quan').value;

    const sinhVien = new SinhVien(ma, ten, gioiTinh, ngaySinh, queQuan);
    quanLySinhVien.themSinhVien(sinhVien);

    this.reset();
});
