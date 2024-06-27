import React, { useCallback, useEffect, useState } from 'react'
import styles from './index.module.css'
import { useDropzone } from 'react-dropzone'
import { db } from '../../../../../dexie'
import { useLiveQuery } from 'dexie-react-hooks'
import { nanoid } from 'nanoid'
import { useCounterStore } from '../../../../../states/zustand/provider'
type Props = {}

function index({ }: Props) {
    let [x, setX] = useState('')
    const friends = useLiveQuery(async () => {
        let friends = await db.friends.toArray()
        return friends.map(item => URL.createObjectURL(new File([item.image], item.id)))[3]
        // return 
    });

    let { addNewItem } = useCounterStore(state => state);

    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
            const reader = new FileReader()

            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')

            reader.onload = () => {
                // Do whatever you want with the file contents
                const binaryStr = reader.result
                const id = db.friends.add({
                    image: binaryStr
                }).then(id => {
                    addNewItem(id, 'untitled', 'untitled', URL.createObjectURL(file))
                });
                // use id to update zustand store.


            }
            reader.readAsArrayBuffer(file)
        })


    }, [])
    const { getRootProps, getInputProps, isDragActive, onDragOver } = useDropzone({
        onDrop,
        maxFiles: 50,
        maxSize: 20_000_000

    })
    return (
        <div className={styles.noItemMessage}>
            <div {...getRootProps()} className={styles.dropArea}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <p>Drop the files here ...</p> :
                        <p>Drag drop some files here, or click to select files</p>
                }
            </div>
        </div>
    )
}

export default index