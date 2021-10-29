
Vue.config.devtools = true;

new Vue({
    el: "#app",
    data: {
        contentList: [
            {
                url: 'img/01.jpg',
                title: 'Svezia',
                description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                url: 'img/02.jpg',
                title: 'Svizzera',
                description: 'Lorem ipsum',
            },
            {
                url: 'img/03.jpg',
                title: 'Gran Bretagna',
                description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                url: 'img/04.jpg',
                title: 'Germania',
                description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            },
            {
                url: 'img/05.jpg',
                title: 'Paradise',
                description: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            }
        ],
        currentImg: 0
    },
    methods: {
        funzioneUp() {
            let newCurrentImg = this.currentImg - 1;
            if (newCurrentImg < 0) {
                newCurrentImg = this.contentList.length - 1;
            }

            this.currentImg = newCurrentImg;
        },
        funzioneDown() {
            let newCurrentImg = this.currentImg + 1;
            if (newCurrentImg > this.contentList.length - 1) {
                newCurrentImg = 0;
            }
            this.currentImg = newCurrentImg;
        },
    },
    mounted() {
        setInterval(() => {
            this.funzioneDown();
        }, 7000);
    }

});