<el-menu :default-active="currentTabIndex" :default-openeds="spreadedMenus">

            <el-submenu v-for="(item,index) in menuList" :key="index" :index="item.menuId">
              <template slot="title">
                <i :class="item.icon"></i>
                <span>{{item.title}}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item v-for="(subItem,subIndex) in item.sub"
                              :key="subIndex"
                              @click="openTab(subItem)"
                              :index="subItem.menuId">
                  {{subItem.title}}
                </el-menu-item>