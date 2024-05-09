import { observable } from '@legendapp/state';

export interface Link {
  id: string,
  url: string,
  title: string,
  dateCreated: string,
  read: boolean
}


const store$ = observable({
  links: [] as Link[]
})