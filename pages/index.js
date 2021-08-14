import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A first meetup',
        image: 'https://img.theweek.in/content/dam/week/leisure/travel/images/2018/7/21/paris-1.jpg',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first meetup!'
    },
    {
        id: 'm2',
        title: 'A second meetup',
        image: 'https://img.theweek.in/content/dam/week/leisure/travel/images/2018/7/21/paris-1.jpg',
        address: 'Some address 10, 12345 Some City',
        description: 'This is a second meetup!'
    },
];

const HomePage = () => {
    return (
        <MeetupList meetups = {DUMMY_MEETUPS} />
    )
}

export default HomePage;