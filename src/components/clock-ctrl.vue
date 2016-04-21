<template>
    <span>{{title}}&nbsp;{{time | moment 'hh:mm:ss A'}}</span>
</template>

<script type="text/babel">
    require('../filters/moment-filter.js');
    module.exports = {
        props: {
            title: {
                type: String,
                twoWay: true
            }
        },
        data() {
            return {
                time: new Date()
            };
        },
        ready() {
            setInterval(()=>{
                this.time = new Date();
            }, 1000);
        }
    }
</script>