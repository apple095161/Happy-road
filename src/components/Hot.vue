<template>
  <div>
    <div class="container sticky-top">
      <div class="row no-gutters">
        <div class="col-md-3 d-flex">
          <ul class="nav flex-column detail-side">
            <li class="nav-item">
              <a class="nav-link no-gutters active" href="#">全部商品</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">人氣大賞．任選 188</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">熱銷精選．3件 699</a>
            </li>
          </ul>
        </div>
        <div class="col-md-9"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      select: ""
    };
  }
};
</script>
