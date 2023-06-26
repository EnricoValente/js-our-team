const team = [
    {
        memberName: 'Warren Barnett',
        memberRole: 'Founder & CEO',
        memberPhoto: 'wayne-barnett-founder-ceo.jpg'
    },

    {
        memberName: 'Angela Carroll',
        memberRole: 'Chief Editor',
        memberPhoto: 'angela-caroll-chief-editor.jpg' 
    },

    {
        memberName: 'Walter Gordon',
        memberRole: 'Office Manager',
        memberPhoto: 'walter-gordon-office-manager.jpg' 
    },

    {
        memberName: 'Angela Lopez',
        memberRole: 'Social Media Manager',
        memberPhoto: 'angela-lopez-social-media-manager.jpg' 
    },

    {
        memberName: 'Scott Estrada',
        memberRole: 'Developer',
        memberPhoto: 'scott-estrada-developer.jpg' 
    },

    {
        memberName: 'Barbara Ramos',
        memberRole: 'Graphic Designer',
        memberPhoto: 'barbara-ramos-graphic-designer.jpg' 
    },

    
]

for (let i = 0; i < team.length; i++) {
    const object = team[i];

    for (const key in object) {
       console.log(object[key]);
    }
    
}