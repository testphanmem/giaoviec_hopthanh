/* ==========================================================================
   Tệp: ketnoi.js
   Mục đích: Cầu nối giao tiếp (API Client) gọi các hàm từ Server bằng Fetch
   Hệ thống: Quản lý Nhiệm vụ - TH Hợp Thành
   Phiên bản: Đồng bộ hóa An toàn Định danh (Safe ID)
   ========================================================================== */

const API_URL = "https://script.google.com/macros/s/AKfycbxCV9EiUaK41nze2XbsPexa62QD6PEbgGt1mNhu-ok-1gMfTYW6iyVMFeV1nrltboviXQ/exec"; 

const KhachAPI = {
    _yeucau: function(hdong, tdtai, khiTcong, khiLoi) {
        const dlieu = { hdong: hdong, ...tdtai };
        
        fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' }, 
            body: JSON.stringify(dlieu)
        })
        .then(ph => ph.json())
        .then(kq => {
            if (kq.ttai === 'loi') {
                if (khiLoi) khiLoi(new Error(kq.tbao));
            } else {
                let dcuoi = (kq.dliu !== undefined) ? kq.dliu : kq;
                if (khiTcong) khiTcong(dcuoi);
            }
        })
        .catch(loie => {
            console.error("Lỗi API (" + hdong + "):", loie);
            if (khiLoi) khiLoi(loie);
        });
    },

    layDlCanb: function(ttrang, taik, khiTcong, khiLoi) {
        this._yeucau("layDlCanb", { ttrang: ttrang, tkcanb: taik }, khiTcong, khiLoi);
    },

    luuTam: function(dldeu, khiTcong, khiLoi) {
        this._yeucau("luuTam", { dldeu: dldeu }, khiTcong, khiLoi);
    },

    nopBcao: function(dl, khiTcong, khiLoi) {
        this._yeucau("nopBcao", { dldeu: dl }, khiTcong, khiLoi);
    },

    layDlThop: function(khiTcong, khiLoi) {
        this._yeucau("layDlThop", {}, khiTcong, khiLoi);
    },

    layDlNghi: function(khiTcong, khiLoi) {
        this._yeucau("layDlNghi", {}, khiTcong, khiLoi);
    },

    layDlYkien: function(khiTcong, khiLoi) {
        this._yeucau("layDlYkien", {}, khiTcong, khiLoi);
    },

    layDlBcao: function(khiTcong, khiLoi) {
        this._yeucau("layDlBcao", {}, khiTcong, khiLoi);
    },

    layDsTrang: function(khiTcong, khiLoi) {
        this._yeucau("layDsTrang", {}, khiTcong, khiLoi);
    },

    ktraQuyenGv: function(taik, khiTcong, khiLoi) {
        this._yeucau("ktraQuyenGv", { tkcanb: taik }, khiTcong, khiLoi);
    },

    ktraQuyenGvTab: function(taik, khiTcong, khiLoi) {
        this._yeucau("ktraQuyenGvtab", { tkcanb: taik }, khiTcong, khiLoi);
    },

    gvLaydsCanb: function(khiTcong, khiLoi) {
        this._yeucau("gvLaydsCanb", {}, khiTcong, khiLoi);
    },

    gvXulyNviec: function(tdtai, khiTcong, khiLoi) {
        this._yeucau("gvXulyNviec", { tdtai: tdtai }, khiTcong, khiLoi);
    },

    gvLaydlBdau: function(khiTcong, khiLoi) {
        this._yeucau("gvLaydlBdau", {}, khiTcong, khiLoi);
    },

    taiTepBcao: function(tdtai, khiTcong, khiLoi) {
        this._yeucau("taiTepBcao", { tdtai: tdtai }, khiTcong, khiLoi);
    },

    xoaTepBcao: function(tdtai, khiTcong, khiLoi) {
        this._yeucau("xoaTepBcao", { tdtai: tdtai }, khiTcong, khiLoi);
    }
};