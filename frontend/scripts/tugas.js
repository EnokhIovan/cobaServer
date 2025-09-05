const cathegoryName = document.querySelectorAll('.cathegory_name');
const cathegoryListEl = document.querySelector('.cathegory_list');
const matkulWrapper = document.querySelectorAll('.matkul_list_wrapper');
const matkulHeader = document.querySelectorAll('.matkul_header');


[...cathegoryName].forEach(item => {
    item.addEventListener('click', (e) => {
        console.log(e.currentTarget.closest('li'));
        const cathegoryList = [...cathegoryListEl.querySelectorAll('li')];
        const index = cathegoryList.indexOf(e.currentTarget.closest('li'));

        cathegoryList[index].querySelector('.matkul_list').classList.toggle('active');
    });
});

[...matkulHeader].forEach(matkul => {
    matkul.addEventListener('click', (e) => {
        let matkulWrapperList = [...matkulWrapper];
        
        let cathegoryIndex = matkulWrapperList.indexOf(e.currentTarget.closest(".matkul_list_wrapper"));
        let matkulList = [...[...matkulWrapperList][cathegoryIndex].children];
        let matkulIndex = matkulList.indexOf(e.currentTarget.closest('.matkul'));
        console.log(matkulList)
        matkulList[matkulIndex].querySelector('.matkul_content').classList.toggle('active');
    })
})


// document.querySelector('.matkul_list').style.height = 'auto';