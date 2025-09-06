/* ADDING EVENT LISTENER */
const cathegoryName = document.querySelectorAll('.cathegory_name');
const cathegoryListEl = document.querySelector('.cathegory_list');
const matkulWrapper = document.querySelectorAll('.matkul_list_wrapper');
const matkulHeader = document.querySelectorAll('.matkul_header');

// Add event listener to cathegory name
[...cathegoryName].forEach(item => {
    item.addEventListener('click', (e) => {
        const cathegoryList = [...cathegoryListEl.querySelectorAll('li')];
        const index = cathegoryList.indexOf(e.currentTarget.closest('li'));

        cathegoryList[index].querySelector('.matkul_list').classList.toggle('active');
    });
});

// Add event listener to matkul name
[...matkulHeader].forEach(matkul => {
    matkul.addEventListener('click', (e) => {
        let matkulWrapperList = [...matkulWrapper];
        
        let cathegoryIndex = matkulWrapperList.indexOf(e.currentTarget.closest(".matkul_list_wrapper"));
        let matkulList = [...[...matkulWrapperList][cathegoryIndex].children];
        let matkulIndex = matkulList.indexOf(e.currentTarget.closest('.matkul'));
        matkulList[matkulIndex].querySelector('.matkul_content').classList.toggle('active');
    })
})

/* FUNCTION */
// Create table
function makeEl(tag, tagClass='', tagText=''){
    if (!tag) {
        console.log('Tag HTML wajib diisi!');
        return null;
    }
    const el = document.createElement(tag);
    if(tagClass) el.classList.add(...tagClass.split(" "));
    if(tagText) el.textContent = tagText;

    return el;
}

// const matkulListEl = document.querySelectorAll('.cathegory_name');
// console.log([...matkulListEl]);

function createMatkul(cathegory, valuesDict, index){
    const matkulListEl = document.querySelector(`.cathegory_name#${cathegory} .matkul_list .matkul_list_wrapper`);

    const matkulEl = makeEl('table', 'matkul');
    const matkulHeaderEl = makeEl('tr', 'matkul_header');
    const matkulHeaderNumberEl = makeEl('td', 'matkul_header_number');
    const matkulHeaderNumberTxtEl = makeEl('h2', '', index+1);
    const matkulHeaderNameEl = makeEl('td', 'matkul_header_name');
    const matkulHeaderNameTxtEl = makeEl('h2', '', valuesDict.matkul_name);
    const matkulHeaderDeadlineEl = makeEl('td', 'matkul_header_deadline');
    const matkulHeaderDeadlineTxtEl = makeEl('h2', '', '0 days left');
    const arrowIndicatorEl = makeEl('td', 'arrow_indicator');
    const arrowIndicatorTxtEl = makeEl('h2', '', '>');

    const matkulContentEl = makeEl('tr', 'matkul_content');
    const matkulContentExplanationEl = makeEl('td', 'matkul_content_explanation');
    const explanationDescriptionEl = makeEl('h3', '', 'Deskripsi: ');
    const explanationDescriptionTxtEl = makeEl('p', 'explanation_description', valuesDict.description);
    const explanationLinkEl = makeEl('h3', '', 'Link: ');
    const explanationLinkTxtEl = makeEl('a', 'explanation_link', valuesDict.link);
    explanationLinkTxtEl.href = valuesDict.link;
    const matkulContentTimestampEl = makeEl('td', 'matkul_content_timestamp');
    const timestampAssignmentEl = makeEl('h3', '', 'Assignmnet: ');
    const timestampAssignmentTxtEl = makeEl('p', 'timestamp_assignment', valuesDict.assignment);
    const timestampDeadlineEl = makeEl('h3', '', 'Deadline: ');
    document.createElement('h3');
    const timestampDeadlineTxtEl = makeEl('p', 'timestampDeadline', valuesDict.deadline);
    
    matkulHeaderNumberEl.appendChild(matkulHeaderNumberTxtEl);
    matkulHeaderNameEl.appendChild(matkulHeaderNameTxtEl);
    matkulHeaderDeadlineEl.appendChild(matkulHeaderDeadlineTxtEl);
    arrowIndicatorEl.appendChild(arrowIndicatorTxtEl);

    matkulHeaderEl.appendChild(matkulHeaderNumberEl);
    matkulHeaderEl.appendChild(matkulHeaderNameEl);
    matkulHeaderEl.appendChild(matkulHeaderDeadlineEl);
    matkulHeaderEl.appendChild(arrowIndicatorEl);

    matkulContentExplanationEl.appendChild(explanationDescriptionEl);
    matkulContentExplanationEl.appendChild  (explanationDescriptionTxtEl);
    matkulContentExplanationEl.appendChild(explanationLinkEl);
    matkulContentExplanationEl.appendChild(explanationLinkTxtEl);

    matkulContentTimestampEl.appendChild(timestampAssignmentEl);
    matkulContentTimestampEl.appendChild(timestampAssignmentTxtEl);
    matkulContentTimestampEl.appendChild(timestampDeadlineEl);
    matkulContentTimestampEl.appendChild(timestampDeadlineTxtEl);

    matkulContentEl.appendChild(matkulContentExplanationEl);
    matkulContentEl.appendChild(matkulContentTimestampEl);

    matkulEl.appendChild(matkulHeaderEl);
    matkulEl.appendChild(matkulContentEl);

    matkulListEl.appendChild(matkulEl);

}
// Pick matkul data from API
fetch('/API/matkul-data')
.then(res => res.json())
.then(data => {
        [...cathegoryListEl.querySelectorAll('li .cathegory_name')].forEach(cathegoryName => {
            cathegoryName.querySelector('.cathegory_matkul_count').innerHTML = `[${data[cathegoryName.id].length}]`;
        })
        
        Object.entries(data).forEach(([keys, values]) => {
            console.log(keys, values)
        })
    })
    .catch(err => {
        console.log("Error", err);
    })
