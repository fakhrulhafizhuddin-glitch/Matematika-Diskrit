<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Matematika Diskrit: Komplemen Himpunan</title>
<script src="[https://cdn.tailwindcss.com](https://cdn.tailwindcss.com)"></script>

<div class="max-w-4xl mx-auto p-6">
    <!-- Header -->
    <header class="text-center mb-10">
        <h1 class="text-4xl font-bold text-indigo-600">Komplemen Himpunan</h1>
        <p class="text-slate-500 mt-2">Mata Kuliah: Matematika Diskrit</p>
    </header>

    <!-- Materi Singkat -->
    <section class="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-8">
        <h2 class="text-xl font-semibold mb-3">Apa itu Komplemen?</h2>
        <p class="leading-relaxed">
            Misalkan $U$ adalah himpunan semesta dan $A$ adalah suatu himpunan bagian dari $U$. 
            <strong>Komplemen dari $A$</strong> (notasi: $A^c$ atau $A'$) adalah himpunan semua anggota $U$ yang bukan anggota $A$.
        </p>
        <div class="mt-4 bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
            <code class="text-indigo-700 font-mono">Aᶜ = { x | x ∈ U dan x ∉ A }</code>
        </div>
    </section>

    <!-- Interactive Calculator -->
    <section class="bg-white p-6 rounded-xl shadow-md border border-indigo-100">
        <h2 class="text-xl font-semibold mb-5 text-center</">Coba Kalkulator Komplemen</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label class="block text-sm font-medium mb-1">Himpunan Semesta (U)</label>
                input id="inputU" type="text" placeholder="Contoh: 1,2,3,4,5" 
                       class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none">
            </div>
            <div>
                <label class="block text-sm font-medium mb-1">Himpunan A</label>
                <input id="inputA" type="text" placeholder="Contoh: 2,4" 
                       class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none">
            </div>
        </div>

        <button onclick="hitungKomplemen()" 
                class="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg transition">
            Hitung Komplemen (Aᶜ)
        </button>

        <!-- Hasil -->
        <div id="resultBox" class="hidden mt-8 p-6 bg-slate-100 rounded-lg text-center">
            <h3 class="text-lg font-bold mb-2">Hasil:</h3>
            <p id="resultDisplay" class="text-3xl font-mono text-indigo-600 tracking-widest"></p>
            <p id="explanation" class="mt-3 text-sm text-slate-500"></p>
        </div>
    section>
</div>

<script>
    function hitungKomplemen() {
        const valU = document.getElementById('inputU').value;
        const valA = document.getElementById('inputA').value;

        // Bersihkan input dan ubah ke array
        const U = valU.split(',').map(item => item.trim()).filter(item => item !== "");
        const A = valA.split(',').map(item => item.trim()).filter(item => item !== "");

        // Logika Komplemen: Filter item di U yang tidak ada di A
        const complement = U.filter(x => !A.includes(x));

        // Tampilkan hasil
        const resultBox = document.getElementById('resultBox');
        const resultDisplay = document.getElementById('resultDisplay');
        const explanation = document.getElementById('explanation');

        resultBox.classList.remove('hidden');
        resultDisplay.innerText = `{ ${complement.join(', ')} }`;
        explanation.innerText = `Elemen di atas adalah anggota semesta U yang tidak ada di himpunan A.`;
    }
</script>