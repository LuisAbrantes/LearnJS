agenda = [];

function addAgendaEvent(description, data, local) {
    let event = { description, data, local };
    agenda.push(event);
    console.log(`Event "${description}" scheduled successfully!`);
}

function listAgendaEvents() {
    if (agenda.length === 0) {
        console.log("You're free! There's no event scheduled in your agenda");
        return;
    }
    console.log('Scheduled Events:');
    agenda.forEach((event, index) => {
        console.log(`Event ${index + 1}`);
        console.log(`   Description: ${event.description}`);
        console.log(`   Data: ${event.data}`);
        console.log(`   Local: ${event.local}`);
        console.log(`----------`);
    });
}

function editEvent(index, newDescrption, newData, newLocal) {
    if (index < 0 || index >= agenda.length) {
        console.log(`Sorry, no event detected.`);
        return;
    }
    agenda[index] = {
        description: newDescrption,
        data: newData,
        local: newLocal
    };
    console.log(`Event ${index + 1} successfully changed!`);
}

addAgendaEvent('Reunião', '2025-05-20', 'Sala 1');
addAgendaEvent('Palestra', '2025-05-21', 'Auditório');
listAgendaEvents();
editEvent(0, 'Reunião Atualizada', '2025-05-22', 'Sala 2');
listAgendaEvents();
