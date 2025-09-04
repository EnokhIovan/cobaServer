const cathegoryName = document.querySelectorAll('.cathegory_name');
const cathegoryListEl = document.querySelector('.cathegory_list');
const matkulWrapper = document.querySelector('.matkul_wrapper');
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
        let matkulList = [...matkulWrapper.children];
        let index = matkulList.indexOf(e.currentTarget.closest(".matkul"));
        matkulList[index].querySelector('.matkul_content').classList.toggle('active');
    })
})


// document.querySelector('.matkul_list').style.height = 'auto';