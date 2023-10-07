const initialState = {
  projects: [
    { name: 'Klingon online store', description: 'The poor Klingon people are probably so evil because they don\'t have online stores. It\'s high time to fix it!', id: '1' },
    { name: 'Constructing papier-mâché figure of Lenin', description: 'Who hasn\'t dreamed of such home decoration? Marx approves', id: '2' },
    { name: 'CRM system for daddy\'s company', description: 'He paid for your education, so it\'s time to pay off your debts', id: '3' }
  ],
  modal: { type: null, status: null, taskId: null },
  tasks: [
    { name: 'Buy klingOn.com domen', description: 'You need to find out how much it costs and whether the domain is free. Payment will be made by the accounting department', projectId: '1', id: '1', status: 'done', date: '05.09.2023' },
    { name: 'Make sure Captain Kirk and Commander Spock are not against this idea', description: 'They may not agree, but the gift for persuasion will help you', projectId: '1', id: '2', status: 'done', date: '06.09.2023' },
    { name: 'Hire a team of developers', description: 'Send them a test assignment, let them make a todo list on React framework', projectId: '1', id: '3', status: 'development', date: '06.09.2023' },
    { name: 'Develop and launch a website', description: 'The easiest part, I bet you', projectId: '1', id: '4', status: 'queque', date: '10.09.2023' },
    { name: 'Buy lots and lots of paper and glue', description: 'You will find the best prices on the Komus website', projectId: '2', id: '5', status: 'done', date: '06.09.2023' },
    { name: 'Find Lenin\'s 3D model', description: 'Check free3d.com', projectId: '2', id: '6', status: 'development', date: '14.09.2023' },
    { name: 'Make a figure', description: 'It may be difficult, but it will definitely be a lot of fun', projectId: '2', id: '7', status: 'queque', date: '18.09.2023' },
    { name: 'Understand what CRM systems are', description: 'Just read some books: "Beyond CRM Basics: An MVP Guide to Expand Your Knowledge and Grow Your Career", "CRM For Dummies" and "The Customer Centricity Playbook: Implement a Winning Strategy Driven by Customer Lifetime Value"', projectId: '3', id: '8', status: 'queque', date: '01.09.2023' },
    { name: 'Order it from a professional', description: 'You can find several useful contacts in the database', projectId: '3', id: '8', status: 'development', date: '19.09.2023' },
  ],
  currentProjectId: null,
}

export default initialState;