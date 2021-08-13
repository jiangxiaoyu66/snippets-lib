<template>
   <div class="basic-layout-wrapper">
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>
        <router-view class="basic-layout-right-main width-limit"/>
      </el-main>
    </el-container>
    
  </div>
</template>

<script>
  import getDataFromFile from '../utils/getDataFromFile'

  getDataFromFile()

</script>