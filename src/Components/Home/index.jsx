import { useRef } from 'react'
import Resourse from './Resourses'

const {USER} = require('../../Graphql/Query')
const {useQuery} =require('@apollo/client')

export default function Home (){
    const counts = useRef()
    const { data} = useQuery(USER,{
        variables:{
            userId:parseInt(localStorage.getItem('userid'))
        }
    })
    
    return(<>
        <div className="home-page-welcome">
            <h1 className="welcome-header"> 
            {
                data&&data.users.status===200 ?
                <>{data.users.data[0].full_name}</>:
                <></>
            }
            Welcome to our library​</h1>
            <p>Let’s take the first step together and help you win your case.<br/> We are here every step of the way.</p>
        </div>
        <Resourse />
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident veniam neque voluptatum corporis, ab a quos iste praesentium cum inventore sunt doloremque accusamus cupiditate ad dolorem saepe, nulla, temporibus odit.
            Neque qui ipsa eum totam corporis, aut deserunt consectetur perspiciatis, quod, ratione aperiam esse voluptatibus voluptate corrupti repellat explicabo voluptatum obcaecati porro atque laboriosam provident. Quidem sint impedit tempore adipisci.
            Aliquid vero consequuntur odio nemo laudantium qui eligendi, explicabo itaque quam similique fuga quos quibusdam saepe, nesciunt corporis ipsum sequi deleniti. Unde, sed aperiam harum nobis explicabo nulla ea ad!
            Quaerat sunt delectus voluptates rerum iure aliquam eum, est repellat assumenda obcaecati reiciendis quam sequi similique non impedit aperiam. Blanditiis minus explicabo tempore illo et ducimus? Error, quos. Quos, culpa?
            Est voluptas cum dolor harum expedita tempore, praesentium, ipsam reiciendis totam rem aperiam vitae dolores mollitia debitis animi deserunt quod? Accusamus veritatis velit magni saepe eveniet quam ad ipsam illo.
            Ut deserunt dignissimos unde quia explicabo incidunt quasi magnam saepe enim eligendi non labore excepturi atque accusantium, expedita repellendus fuga porro assumenda eveniet illum! Dignissimos in cum laboriosam quisquam dolores!
            Ab numquam impedit minus at, omnis modi doloremque ipsam voluptate eveniet. Dolore culpa, adipisci, explicabo sint unde in illo praesentium ut tempora incidunt eos quisquam dolores, suscipit quaerat ducimus! Eligendi.
            Expedita, facilis mollitia libero doloribus tempora voluptates! Enim ea voluptas a odit praesentium, voluptate dignissimos alias voluptatibus. Esse, hic deleniti, nemo dicta quod sunt, qui eligendi saepe consectetur quos neque.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident veniam neque voluptatum corporis, ab a quos iste praesentium cum inventore sunt doloremque accusamus cupiditate ad dolorem saepe, nulla, temporibus odit.
            Neque qui ipsa eum totam corporis, aut deserunt consectetur perspiciatis, quod, ratione aperiam esse voluptatibus voluptate corrupti repellat explicabo voluptatum obcaecati porro atque laboriosam provident. Quidem sint impedit tempore adipisci.
            Aliquid vero consequuntur odio nemo laudantium qui eligendi, explicabo itaque quam similique fuga quos quibusdam saepe, nesciunt corporis ipsum sequi deleniti. Unde, sed aperiam harum nobis explicabo nulla ea ad!
            Quaerat sunt delectus voluptates rerum iure aliquam eum, est repellat assumenda obcaecati reiciendis quam sequi similique non impedit aperiam. Blanditiis minus explicabo tempore illo et ducimus? Error, quos. Quos, culpa?
            Est voluptas cum dolor harum expedita tempore, praesentium, ipsam reiciendis totam rem aperiam vitae dolores mollitia debitis animi deserunt quod? Accusamus veritatis velit magni saepe eveniet quam ad ipsam illo.
            Ut deserunt dignissimos unde quia explicabo incidunt quasi magnam saepe enim eligendi non labore excepturi atque accusantium, expedita repellendus fuga porro assumenda eveniet illum! Dignissimos in cum laboriosam quisquam dolores!
            Ab numquam impedit minus at, omnis modi doloremque ipsam voluptate eveniet. Dolore culpa, adipisci, explicabo sint unde in illo praesentium ut tempora incidunt eos quisquam dolores, suscipit quaerat ducimus! Eligendi.
            Expedita, facilis mollitia libero doloribus tempora voluptates! Enim ea voluptas a odit praesentium, voluptate dignissimos alias voluptatibus. Esse, hic deleniti, nemo dicta quod sunt, qui eligendi saepe consectetur quos neque.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident veniam neque voluptatum corporis, ab a quos iste praesentium cum inventore sunt doloremque accusamus cupiditate ad dolorem saepe, nulla, temporibus odit.
            Neque qui ipsa eum totam corporis, aut deserunt consectetur perspiciatis, quod, ratione aperiam esse voluptatibus voluptate corrupti repellat explicabo voluptatum obcaecati porro atque laboriosam provident. Quidem sint impedit tempore adipisci.
            Aliquid vero consequuntur odio nemo laudantium qui eligendi, explicabo itaque quam similique fuga quos quibusdam saepe, nesciunt corporis ipsum sequi deleniti. Unde, sed aperiam harum nobis explicabo nulla ea ad!
            Quaerat sunt delectus voluptates rerum iure aliquam eum, est repellat assumenda obcaecati reiciendis quam sequi similique non impedit aperiam. Blanditiis minus explicabo tempore illo et ducimus? Error, quos. Quos, culpa?
            Est voluptas cum dolor harum expedita tempore, praesentium, ipsam reiciendis totam rem aperiam vitae dolores mollitia debitis animi deserunt quod? Accusamus veritatis velit magni saepe eveniet quam ad ipsam illo.
            Ut deserunt dignissimos unde quia explicabo incidunt quasi magnam saepe enim eligendi non labore excepturi atque accusantium, expedita repellendus fuga porro assumenda eveniet illum! Dignissimos in cum laboriosam quisquam dolores!
            Ab numquam impedit minus at, omnis modi doloremque ipsam voluptate eveniet. Dolore culpa, adipisci, explicabo sint unde in illo praesentium ut tempora incidunt eos quisquam dolores, suscipit quaerat ducimus! Eligendi.
            Expedita, facilis mollitia libero doloribus tempora voluptates! Enim ea voluptas a odit praesentium, voluptate dignissimos alias voluptatibus. Esse, hic deleniti, nemo dicta quod sunt, qui eligendi saepe consectetur quos neque.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident veniam neque voluptatum corporis, ab a quos iste praesentium cum inventore sunt doloremque accusamus cupiditate ad dolorem saepe, nulla, temporibus odit.
            Neque qui ipsa eum totam corporis, aut deserunt consectetur perspiciatis, quod, ratione aperiam esse voluptatibus voluptate corrupti repellat explicabo voluptatum obcaecati porro atque laboriosam provident. Quidem sint impedit tempore adipisci.
            Aliquid vero consequuntur odio nemo laudantium qui eligendi, explicabo itaque quam similique fuga quos quibusdam saepe, nesciunt corporis ipsum sequi deleniti. Unde, sed aperiam harum nobis explicabo nulla ea ad!
            Quaerat sunt delectus voluptates rerum iure aliquam eum, est repellat assumenda obcaecati reiciendis quam sequi similique non impedit aperiam. Blanditiis minus explicabo tempore illo et ducimus? Error, quos. Quos, culpa?
            Est voluptas cum dolor harum expedita tempore, praesentium, ipsam reiciendis totam rem aperiam vitae dolores mollitia debitis animi deserunt quod? Accusamus veritatis velit magni saepe eveniet quam ad ipsam illo.
            Ut deserunt dignissimos unde quia explicabo incidunt quasi magnam saepe enim eligendi non labore excepturi atque accusantium, expedita repellendus fuga porro assumenda eveniet illum! Dignissimos in cum laboriosam quisquam dolores!
            Ab numquam impedit minus at, omnis modi doloremque ipsam voluptate eveniet. Dolore culpa, adipisci, explicabo sint unde in illo praesentium ut tempora incidunt eos quisquam dolores, suscipit quaerat ducimus! Eligendi.
            Expedita, facilis mollitia libero doloribus tempora voluptates! Enim ea voluptas a odit praesentium, voluptate dignissimos alias voluptatibus. Esse, hic deleniti, nemo dicta quod sunt, qui eligendi saepe consectetur quos neque.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident veniam neque voluptatum corporis, ab a quos iste praesentium cum inventore sunt doloremque accusamus cupiditate ad dolorem saepe, nulla, temporibus odit.
            Neque qui ipsa eum totam corporis, aut deserunt consectetur perspiciatis, quod, ratione aperiam esse voluptatibus voluptate corrupti repellat explicabo voluptatum obcaecati porro atque laboriosam provident. Quidem sint impedit tempore adipisci.
            Aliquid vero consequuntur odio nemo laudantium qui eligendi, explicabo itaque quam similique fuga quos quibusdam saepe, nesciunt corporis ipsum sequi deleniti. Unde, sed aperiam harum nobis explicabo nulla ea ad!
            Quaerat sunt delectus voluptates rerum iure aliquam eum, est repellat assumenda obcaecati reiciendis quam sequi similique non impedit aperiam. Blanditiis minus explicabo tempore illo et ducimus? Error, quos. Quos, culpa?
            Est voluptas cum dolor harum expedita tempore, praesentium, ipsam reiciendis totam rem aperiam vitae dolores mollitia debitis animi deserunt quod? Accusamus veritatis velit magni saepe eveniet quam ad ipsam illo.
            Ut deserunt dignissimos unde quia explicabo incidunt quasi magnam saepe enim eligendi non labore excepturi atque accusantium, expedita repellendus fuga porro assumenda eveniet illum! Dignissimos in cum laboriosam quisquam dolores!
            Ab numquam impedit minus at, omnis modi doloremque ipsam voluptate eveniet. Dolore culpa, adipisci, explicabo sint unde in illo praesentium ut tempora incidunt eos quisquam dolores, suscipit quaerat ducimus! Eligendi.
            Expedita, facilis mollitia libero doloribus tempora voluptates! Enim ea voluptas a odit praesentium, voluptate dignissimos alias voluptatibus. Esse, hic deleniti, nemo dicta quod sunt, qui eligendi saepe consectetur quos neque.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident veniam neque voluptatum corporis, ab a quos iste praesentium cum inventore sunt doloremque accusamus cupiditate ad dolorem saepe, nulla, temporibus odit.
            Neque qui ipsa eum totam corporis, aut deserunt consectetur perspiciatis, quod, ratione aperiam esse voluptatibus voluptate corrupti repellat explicabo voluptatum obcaecati porro atque laboriosam provident. Quidem sint impedit tempore adipisci.
            Aliquid vero consequuntur odio nemo laudantium qui eligendi, explicabo itaque quam similique fuga quos quibusdam saepe, nesciunt corporis ipsum sequi deleniti. Unde, sed aperiam harum nobis explicabo nulla ea ad!
            Quaerat sunt delectus voluptates rerum iure aliquam eum, est repellat assumenda obcaecati reiciendis quam sequi similique non impedit aperiam. Blanditiis minus explicabo tempore illo et ducimus? Error, quos. Quos, culpa?
            Est voluptas cum dolor harum expedita tempore, praesentium, ipsam reiciendis totam rem aperiam vitae dolores mollitia debitis animi deserunt quod? Accusamus veritatis velit magni saepe eveniet quam ad ipsam illo.
            Ut deserunt dignissimos unde quia explicabo incidunt quasi magnam saepe enim eligendi non labore excepturi atque accusantium, expedita repellendus fuga porro assumenda eveniet illum! Dignissimos in cum laboriosam quisquam dolores!
            Ab numquam impedit minus at, omnis modi doloremque ipsam voluptate eveniet. Dolore culpa, adipisci, explicabo sint unde in illo praesentium ut tempora incidunt eos quisquam dolores, suscipit quaerat ducimus! Eligendi.
            Expedita, facilis mollitia libero doloribus tempora voluptates! Enim ea voluptas a odit praesentium, voluptate dignissimos alias voluptatibus. Esse, hic deleniti, nemo dicta quod sunt, qui eligendi saepe consectetur quos neque.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident veniam neque voluptatum corporis, ab a quos iste praesentium cum inventore sunt doloremque accusamus cupiditate ad dolorem saepe, nulla, temporibus odit.
            Neque qui ipsa eum totam corporis, aut deserunt consectetur perspiciatis, quod, ratione aperiam esse voluptatibus voluptate corrupti repellat explicabo voluptatum obcaecati porro atque laboriosam provident. Quidem sint impedit tempore adipisci.
            Aliquid vero consequuntur odio nemo laudantium qui eligendi, explicabo itaque quam similique fuga quos quibusdam saepe, nesciunt corporis ipsum sequi deleniti. Unde, sed aperiam harum nobis explicabo nulla ea ad!
            Quaerat sunt delectus voluptates rerum iure aliquam eum, est repellat assumenda obcaecati reiciendis quam sequi similique non impedit aperiam. Blanditiis minus explicabo tempore illo et ducimus? Error, quos. Quos, culpa?
            Est voluptas cum dolor harum expedita tempore, praesentium, ipsam reiciendis totam rem aperiam vitae dolores mollitia debitis animi deserunt quod? Accusamus veritatis velit magni saepe eveniet quam ad ipsam illo.
            Ut deserunt dignissimos unde quia explicabo incidunt quasi magnam saepe enim eligendi non labore excepturi atque accusantium, expedita repellendus fuga porro assumenda eveniet illum! Dignissimos in cum laboriosam quisquam dolores!
            Ab numquam impedit minus at, omnis modi doloremque ipsam voluptate eveniet. Dolore culpa, adipisci, explicabo sint unde in illo praesentium ut tempora incidunt eos quisquam dolores, suscipit quaerat ducimus! Eligendi.
            Expedita, facilis mollitia libero doloribus tempora voluptates! Enim ea voluptas a odit praesentium, voluptate dignissimos alias voluptatibus. Esse, hic deleniti, nemo dicta quod sunt, qui eligendi saepe consectetur quos neque.
        </p>
    
    </>)
}