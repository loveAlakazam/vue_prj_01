<template>
    <div>
        <h1>Welcome {{user}}! ({{location}})</h1>
        <input type="text" v-model="input1" />

        <!--button을 클릭한 순간 input 태그에 있는 값을 갖고오기-->
        <!--click하면 getData()메소드 호출-->
        <button type="button" @click="getData()">Get Input Data</button>
        <button type="button" @click="setData()">Set Input Data</button>
    
        <!--
            options 배열형태의 데이터를 넣기 
            d: data, i:index
            key: options의 원소의 유일한 값
            v-model을 통해서 region데이터로 바인딩.
        -->
        <select class="form-control" v-model="region"  @change="changeRegion">
            <option :key="i" :value="d.v" v-for="(d,i) in options">{{d.t}}</option>    
        </select>

        <!--table만들기-->
        <table class="table table-bordered" v-show="tableShow">
            <tr :key="i" v-for="(d,i) in options">
                <td>{{d.v}}</td>
                <td>{{d.t}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    //data handling
    data(){
        return {
            user: "ek12mv2",
            location: "Seoul",
            input1: "sampleInput",
            options: [
                {v: "S", t:"Seoul" },
                {v: "J", t:"Jeju"},
                {v: "B", t:"Busan"},
            ],
            region: "J", //기본값
            tableShow: true,
        };
    },

    //정의한 데이터를 method형식으로 할 수 있다.
    // 데이터의 변경을 캐치할 수 있다.
    // 특정데이터의 변경순간을 모니터링할 수 있는 기능이다. 
    watch:{
        input1(){
            console.log(this.input1);
        }
    },

    //method function들을 만들 수 있다.
    //button클릭 이벤트도 해당된다.
    methods:{
        getData(){
            alert(this.input1);
        },

        setData(){
            this.input1="please input data";
        },

        changeRegion(){
            alert(this.region);
        }
    },
    
    //인스턴스 라이프 사이클 다이어그램을 기반으로 메소드를 만들어본다.
    beforeCreate(){
        console.log('before create');
    },
    created(){
        console.log('create');
    },
    beforeMount(){
        console.log('before mount');
    },
    mounted(){
        console.log('mount');
    },
    beforeUpdate(){
        //데이터변경전
        console.log('before update');
    },
    updated(){
        //데이터변경후
        console.log('update');
    },
    beforeDestroy(){
        console.log('before destroy');
    },
    destroyed(){
        console.log('destroyed');
    },
}
</script>