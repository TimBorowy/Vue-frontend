<template>
  <div>
    <header>
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">CoolPeople</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <a class="waves-effect waves-light btn">Create new</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <div class="container">
      <Overview-list></Overview-list>
      <!-- <detail-item></detail-item> -->
      <create-form></create-form>
      <edit-form></edit-form>
      <delete-confirmation></delete-confirmation>
    </div>
  </div>
</template>

<script>
import OverviewList from '@/components/OverviewList';
// import DetailItem from '@/components/DetailItem';
import CreateForm from '@/components/CreateForm';
import EditForm from '@/components/EditForm';
import DeleteConfirmation from '@/components/DeleteConfirmation';

export default {
  components: {
    OverviewList,
    // DetailItem,
    CreateForm,
    EditForm,
    DeleteConfirmation
  },
  methods: {
    buttonClicked: function () {
      this.$root.$emit('hide', true)
    }
  }
}
</script>

<style>
</style>
