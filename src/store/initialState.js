const initialState = {
  projects: [
    {
      name: 'Klingon online store', description: 'The poor Klingon people are probably so evil because they don\'t have online stores. It\'s high time to fix it!', id: '1',
    },
    {
      name: 'Constructing papier-mâché figure of Lenin', description: 'Who hasn\'t dreamed of such home decoration? Marx approves', id: '2',
    },
    {
      name: 'CRM system for daddy\'s company', description: 'He paid for your education, so it\'s time to pay off your debts', id: '3'
    }
  ],
  tasks: [
    { name: 'Buy klingOn.com domen', description: 'You need to find out how much it costs and whether the domain is free. Payment will be made by the accounting department', projectId: '1', id: '1', status: 'done' },
    { name: 'Make sure Captain Kirk and Commander Spock are not against this idea', description: 'They may not agree, but the gift for persuasion will help you', projectId: '1', id: '2', status: 'done' },
    { name: 'Hire a team of developers', description: 'Send them a test assignment, let them make a todo list on React framework', projectId: '1', id: '3', status: 'development' },
    { name: 'Develop and launch a website', description: 'The easiest part, I bet you', projectId: '1', id: '4', status: 'queque' },

    { name: 'Buy lots and lots of paper and glue', projectId: '2', id: '5' },
    { name: 'Find Lenin\'s 3D model', projectId: '2', id: '6' },
    { name: 'Make a figure', projectId: '2', id: '7' },
    { name: 'Understand what CRM systems are', projectId: '3', id: '8' },
    { name: 'Order it from a professional', projectId: '3', id: '8' },
  ],
  currentProjectId: null,
}

export default initialState;