Vue.config.devtools = true;

const add = new Vue(
    {
        el: '#app',
        data: {
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        },
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        },
                    ],
                },

                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        },
                    ],
                },
                {
                    name: 'Conchita Wurst',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        },
                    ],
                },
            ],
            contactIndex: 0,
            currentProfile: '',
            myNewMsg: '',
            newAnswer: {
                date: '10/01/2020 15:30:55',
                text: 'Ok',
                status: 'received',
            },
            filter: '',
            filteredContacts: '',

        },
        mounted() {
            this.currentProfile = 'img/avatar' + this.contacts[this.contactIndex].avatar + '.jpg';
            this.filterContacts();
        },
        methods: {
            returnSrc: function (contact) {
                return 'img/avatar' + contact.avatar + '.jpg';
            },
            moveTo: function (index) {
                this.contactIndex = index;
                this.currentProfile = 'img/avatar' + this.contacts[this.contactIndex].avatar + '.jpg';
            },
            sendMyMsg: function () {
                if (this.myNewMsg !== '') {
                    let msgToSend = { date: '10/01/2020 15:50:00', text: this.myNewMsg, status: 'sent' };
                    this.myNewMsg = '';
                    this.contacts[this.contactIndex].messages.push(msgToSend);
                    this.sendAnswer();
                }
            },
            sendAnswer: function () {
                setTimeout(() => {
                    this.contacts[this.contactIndex].messages.push(this.newAnswer);
                }, 2000);
            },
            filterContacts: function () {
                this.filteredContacts = this.contacts.filter((contact) => {
                    if (this.filter === '') {
                        return true;
                    } else {
                        let contactSearch = this.filter.toLowerCase();
                        let contactFiltered = contact.name.toLowerCase();
                        if (contactFiltered.includes(contactSearch)) {
                            return true;
                        } else {
                            return false;
                        }
                    }

                });
            }
        },
    }
)