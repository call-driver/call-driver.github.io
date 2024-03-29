function generateOutput() {
    var ivrVerified = document.querySelector('input[name="ivrResult"]:checked')
        ? document.querySelector('input[name="ivrResult"]:checked').value : '';
    var languageLine = document.getElementById('languageLine').checked;
    var languageLineID = document.getElementById('languageLineID').value;
    var name = document.getElementById('name').value;
    var primaryName = document.getElementById('primaryName').value;
    var hhid = document.getElementById('hhid').value;
    var callbackNum = document.getElementById('callbackNum').value;
    var reason = document.getElementById('reason').value;
    var details = document.getElementById('details').value;
    var issueResolved = document.querySelector('input[name="issueResolved"]:checked')
        ? document.querySelector('input[name="issueResolved"]:checked').value : '';
    var ticketCreated = document.getElementById('ticketCreated').checked;
    var ticketNumber = document.getElementById('ticketNumber').value;
    var resolutionDetails = document.getElementById('resolutionDetails').value;
    var nextSteps = document.getElementById('nextSteps').value;
    var ticketCreated = document.getElementById('ticketCreated').checked;
    var ticketNumber = document.getElementById('ticketNumber').value;
    var outputText = "" + (ivrVerified ? "" : "");

    if (languageLine) {
        outputText += "Language Line Rep's ID#: " + languageLineID + "<br>";
    }

    outputText += "" + (languageLine ? "" : "");
    outputText += "Caller's Name: " + name + "<br>";
    outputText += "Primary's Name and HHID: " + primaryName + " - " + hhid + "<br>";
    outputText += "Callback Number: " + callbackNum + "<br>";
    outputText += "Reason for the call: " + reason + "<br>";
    outputText += "Details of the call: " + details + "<br>";
    
    if (ticketCreated) {
        outputText += "Ticket created: Yes<br>";
        outputText += "Ticket number: " + ticketNumber + "<br>";
    } else {
        outputText += "";
    }
    
    outputText += "Was the caller's issue/reason resolved: " + issueResolved + "<br>";

    if (issueResolved === 'No') {
        outputText += "What is needed for resolution: " + resolutionDetails + "<br>";
    } else {
        outputText += "";
    }

    outputText += "Next Steps: " + nextSteps + "<br>";

    document.getElementById('output').innerHTML = outputText;

    var outputPanel = document.getElementById('output-panel');
    outputPanel.style.width = 'flex';

    var surveyOffered = document.querySelector('input[name="surveyOffered"]:checked')
        ? document.querySelector('input[name="surveyOffered"]:checked').value
        : '';

    var surveyReason = document.getElementById('surveyReason').value;

    if (surveyOffered === 'No') {
        outputText += "Was the survey offered: " + surveyOffered + "<br>";
        outputText += "Why was the survey not offered: " + surveyReason + "<br>";
    }

    document.getElementById('output').innerHTML = outputText;

    document.getElementById('output').innerHTML = outputText;

    var outputPanel = document.getElementById('output-panel');
    outputPanel.style.width = 'flex';

    document.getElementById('output').innerHTML = outputText;

    document.getElementById('copy-output-button').classList.add('generated');

    var outputPanel = document.getElementById('output-panel');
    outputPanel.style.borderColor = 'forestgreen';
    outputPanel.style.borderWidth = '5px';
    outputPanel.style.borderStyle = 'solid';
    outputPanel.style.boxShadow = '0 0 8px 8px rgba(34, 139, 34, 0.4)';
}

function toggleLanguageLineSection() {
    var languageLineSection = document.querySelector('.language-line-section');
    var languageLineCheckbox = document.getElementById('languageLine');

    if (languageLineCheckbox.checked) {
        languageLineSection.style.display = 'block';
    } else {
        languageLineSection.style.display = 'none';
        document.getElementById('languageLineID').value = '';
    }
}

function toggleTicketSection() {
    var ticketSection = document.querySelector('.ticket-section');
    var ticketCheckbox = document.getElementById('ticketCreated');

    if (ticketCheckbox.checked) {
        ticketSection.style.display = 'grid';
    } else {
        ticketSection.style.display = 'none';
        document.getElementById('ticketNumber').value = '';
    }
}

function toggleResolutionDetails(show) {
    var resolutionDetailsSection = document.getElementById('resolutionDetailsSection');
    resolutionDetailsSection.style.display = show ? 'block' : 'none';
}

function toggleSurveyReason(show) {
    var surveyReasonSection = document.getElementById('surveyReasonSection');
    surveyReasonSection.style.display = show ? 'block' : 'none';
}

function clearForm() {
    document.getElementById('callDriver').reset();
    document.getElementById('output').innerHTML = '';

    var copyButton = document.getElementById('copy-output-button');
    copyButton.classList.remove('generated');
    
    var surveyReasonSection = document.getElementById('surveyReasonSection');
    surveyReasonSection.style.display = 'none';
    
    var resolutionDetailsSection = document.getElementById('resolutionDetailsSection');
    resolutionDetailsSection.style.display = 'none';
    
    var languageLineSection = document.querySelector('.language-line-section');
    languageLineSection.style.display = 'none';
    
    var ticketSection = document.querySelector('.ticket-section');
    ticketSection.style.display = 'none';
    
    var outputPanel = document.getElementById('output-panel');
    outputPanel.style.borderColor = 'mediumslateblue';
    outputPanel.style.borderWidth = '3px'
    outputPanel.style.borderStyle = 'solid';
    outputPanel.style.width = 'flex';
    outputPanel.style.boxShadow = '0 0 8px 8px rgba(34, 139, 34, 0.0)';
}

function copyOutput() {
    var outputContent = document.getElementById('output').innerText;

    var textarea = document.createElement('textarea');
    textarea.value = outputContent;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    alert('Call Log copied to clipboard!');
}