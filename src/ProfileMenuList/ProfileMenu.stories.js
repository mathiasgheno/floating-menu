import { ProfileMenuList } from './ProfileMenuList'

export default {
  title: 'ProfileMenu',
  component: ProfileMenuList,
}

const Template = props => <ProfileMenuList {...props} />

export const Normal = Template.bind({});
