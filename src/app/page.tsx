'use client'

import {Modal} from '../components/Modal';
import {lazy, Suspense, useState} from "react";
import VirtualScroll from "@/components/virtual-scroll/virtual-scroll";
import UserForm from "@/components/form-component/form-component";
import TodoList from "@/components/todo-list/todo-list";
import DebouncedSearch from "@/components/debounced-search/debounced-search";
import Counter from "@/components/counter/counter";
import Tabs, {TABS__LIST} from "@/components/tabs/tabs";
import InfiniteScroll from "@/components/infinite-scroll/infinite-scroll";
import CustomInput from "@/components/input-zero-after-number/input";
import RangeSelector from "@/components/RangeSelector/RangeSelector";

const  Pagination = lazy(() => import("@/components/pagination/pagination"));

export default function Home() {

    const [isOpen, setIsOpen] = useState(false)
    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}/>
                {/*<Suspense fallback={<div>Loading...</div>}>*/}
                {/*    <Pagination rowsPerPage={5}/>*/}
                {/*</Suspense>*/}
                {/*< VirtualScroll />*/}
                {/*<DomEvents />*/}
                {/*<TxtFileDragAndDrop />*/}
                {/*<ImageBunch />*/}
                {/*<UserForm />*/}
                {/*<TodoList />*/}
                {/*<DebouncedSearch time={500}/>*/}
                {/*<Counter />*/}
                {/*<Tabs tabs={TABS__LIST}/>*/}
                {/*<InfiniteScroll />*/}
                {/*<CustomInput />*/}
                {/*<RangeSelector name={'name'} fromD={1} toD={10} />*/}
                
            </main>
        </div>
    );
}
