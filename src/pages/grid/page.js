import MyDropdown from '../grid/components/MyDropdown';
import MyNavigation from '../grid/components/MyNavigation';
import MyMenu from '../grid/components/MyMenu';
import MyPageHeader from '../grid/components/MyPageHeader';
import MyDrawer from '../grid/components/MyDrawer';

export default () => {
  return (
    <div>
      <MyPageHeader />
      <MyNavigation />
      <div>
        <MyMenu /> 
        <MyDropdown />
        <MyDrawer />
      </div>
    </div>
  )
}