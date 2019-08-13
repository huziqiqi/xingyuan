<template>
    <div class="layui-body">
        <Uediter :value="ueditor.value" :config="ueditor.config" ref="ue"></Uediter>
        <el-button  @click="returnContent()">显示编辑器内容</el-button>
        <div>{{dat.content}}</div>
    </div>
</template>
<script>
    import Uediter from './UE';

    export default {
        data () {
            return {
                dat: {
                    content: ''
                },
                ueditor: {
                    value: '编辑器默认文字',
                    config: {
                        initialFrameWidth: 1000,
                        initialFrameHeight: 320
                    }
                }
            }
        },
     
        methods: {
            returnContent () {
                this.dat.content = this.$refs.ue.getUEContent()
            },
           
        },
        components: {
            Uediter
        },
    }
</script>