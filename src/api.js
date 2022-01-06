import axios from 'axios'
export default {
    created() {
        console.log('minxin create')
    },
    mounted() {
        // 컴포넌트가 마운트 끝났을때
        console.log('mixin mounted')
    },
    methods: {
        async $callAPI(url, method, data) {
            return (await axios({
                method: method,
                url: url,
                data: data
            }).catch( e => {
                console.log(e);
            })).data;
        
        }
    }
}