import React from 'react';
import './content.css'

const Content = () => {
    return(
        <div className="container">
            <img className= "gambar1" src="https://i.pinimg.com/564x/db/11/36/db11367ffd068060fb6b55bbd93725ea.jpg " alt="" />
            <p className="mesin">Mesin 4G63T</p>
            <p className="penjelasan">Mesin 4G63T merupakan mesin legendaris dari pabrikan mitsubishi. Mesin tersebut pertama kali digunakan pada mobil mitsubishi Galant VR-4 pada tahun 1988 dan di populerkan oleh mobil mitsubishi Evolution. Mesin tersebut memiliki kapasitas 2000cc 4 silinder segaris dan berkonfigurasi DOHC 16 katup. Mesin tersebut di bekali turbocharged sehingga menghasilkan tenaga sebesar 174hp dan torsi sebesar 253Nm. Tenaga tersebut di raih pada Rpm 4.750. Mesin tersebut adalah salah satu mesin terkencang dan sangat populer pada masa nya.</p>
            <h1>Perbedaan Mesin DOHC dan SOHC</h1>
            <p className="dohc">Perbedaan utama antara mesin SOHC dan DOHC terletak pada jumlah camshaft yang dimiliki. SOHC (Single Overhead Camshaft) hanya memiliki satu camshaft, sedangkan DOHC (Dual Overhead Camshaft) memiliki dua camshaft. 
            </p>
            <img src="https://assets.promediateknologi.id/crop/0x0:0x0/x/photo/2023/03/08/Screenshot_20230308-1332142-3568123460.png" alt="" className="gambar2" />
            <h2>Mesin SOHC</h2>
            <p>1. Struktur: SOHC memiliki struktur yang lebih sederhana dibandingkan. <br></br>
            2. Keandalan: SOHC lebih mudah dikenali dan diidentifikasi oleh mekanik dan pemilik kendaraan. <br></br>
            3. Tenaga: SOHC mampu menghasilkan tenaga yang cukup besar pada putaran mesin rendah hingga menengah.  
            </p>
            <h2>Mesin DOHC</h2>
            <p>1. Pengaturan waktu katup: DOHC memiliki pengaturan waktu katup yang lebih akurat dibandingkan SOHC. 
            <br></br>
            2. Efisiensi pembakaran: DOHC memiliki efisiensi pembakaran yang lebih baik dibandingkan SOHC.<br></br>
            3. Daya mesin: DOHC memiliki daya mesin yang lebih baik dibandingkan SOHC.  
            </p>
           <h1>Perbedaan Mesin 2Tak dan 4Tak</h1>
           <p>Perbedaan mesin 2 tak dan 4 tak terletak pada jumlah langkah piston yang terjadi dalam satu siklus pembakaran <br /> 1. Mesin 2 tak melakukan dua langkah piston, yaitu isap dan dorong, dalam satu putaran poros engkol. <br /> 2. Mesin 4 tak melakukan empat langkah piston, yaitu isap, kompresi, pembakaran, dan buang, dalam dua putaran poros engkol.</p>
           <h2>Mesin 2 Tak</h2>
           <ul>
            <li>1. Tenaga lebih besar: Mesin 2 tak menghasilkan tenaga yang lebih besar dibandingkan mesin 4 tak dengan ukuran mesin yang sama.</li>
            <li>2. Perawatan lebih mudah: Konstruksi mesin 2 tak lebih sederhana sehingga perawatannya lebih mudah. 
            </li>
           </ul>
           <h2>Mesin 4 Tak</h2>
           <ul>
            <li>1. Efisien dan ramah lingkungan: Mesin 4 tak biasanya lebih efisien dan ramah lingkungan dibandingkan dengan mesin 2 tak.</li>
            <li>2. Sistem pengelolaan emisi yang lebih baik: Mesin 4 tak memiliki sistem pengelolaan emisi yang lebih baik sehingga menghasilkan lebih sedikit polusi</li>
           </ul>
        </div>
    )
}

export default Content