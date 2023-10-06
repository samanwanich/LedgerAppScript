# LedgerAppScript
อ้อ แล้วก็ Repo นี้ ไม่จำเป็นต้องก็อปโค๊ดใด ๆ ไปวางนะ เพียงแค่กด ทำสำเนา จาก Spreadsheet แค่นั้นเลย!
https://docs.google.com/spreadsheets/d/1nlrcB60W89Dlq4k1LWp6g3vBdvggVKskMt28BbR6hIg/edit?usp=sharing

อันดับแรกขอแนะนำให้รู้จักกับ หน้าตาของ Spreadsheet ปัจจุบันกันก่อน
โดยช่อง เงินเข้า/เงินออก/สรุป บ. นั้นจะหมายถึงยอดรวมภายในบัญชีนั่นเอง
ส่วนช่องที่มีลักษณะคล้ายกันลำดับถัดมา คือ ยอดเงินสด

![1](https://github.com/samanwanich/LedgerAppScript/assets/56758896/2374782a-7ea5-4803-b115-44116b1ce6c7)


ซึ่งจากภาพก่อนหน้า จะเห็นได้ว่า เป็นเพียงแค่การทำสรุปยอดของแต่ละเดือนเพียงเท่านั้น
 
ถ้าอยากจะทำเดือนต่อไปล่ะ ทำยังไงดี !?

กดทำสำเนา Month 11/2023 เลยจ้า! (ต้อง Month 11/2023 เท่านั้นนะ เพราะมีการผูกสูตรต่าง ๆ ไว้ หรือใครจะอินดี้ เอาของ Month 10/2023 ก็ได้ แต่ก็ต้องไปนั่งกรอกเงินต้นเองใหม่นะ555)

![2](https://github.com/samanwanich/LedgerAppScript/assets/56758896/fd7fdf40-ba90-4852-a0dd-bd3023600fa9)


ทำสำเนาเสร็จแล้วจะได้หน้าตาประมาณนี้กัน

![3](https://github.com/samanwanich/LedgerAppScript/assets/56758896/9dac1fc7-17aa-4c06-958a-7fe35bc30c78)

เอาล่ะ เปลี่ยนชื่อเป็น Month 12/2023

**สำคัญมากกกกกกกกก  การตั้งชื่อ Sheet ภายในให้ตั้งเป็น Month และตามด้วยเลขเดือน/ปี ตัวอย่างเช่น จะตั้งชื่อ sheet ประจำเดือน มีนาคม ปี 2024
ให้ตั้งชื่อเป็น Month 03/2024 หรือ Month 03/2567

![4](https://github.com/samanwanich/LedgerAppScript/assets/56758896/180603dd-c02b-444d-b416-f6849a757d37)


เปลี่ยนสูตรของทั้ง 3 ช่อง ก่อน
1. เดือนที่ระบุ ปรับจาก Month 10/2023 -> Month 11/2023 หรือก็คือ Sheet ก่อนหน้านั่นเอง

![5](https://github.com/samanwanich/LedgerAppScript/assets/56758896/ee6c81c2-df13-4952-976d-8fcb990966a6)


2. สรุปบัญชี Month 10/2023 -> Month 11/2023

![6](https://github.com/samanwanich/LedgerAppScript/assets/56758896/7d51f0d2-eef2-4f66-bca7-befdbb8073bb)


3. สรุป Month 10/2023 -> Month 11/2023

![7](https://github.com/samanwanich/LedgerAppScript/assets/56758896/14c9fe27-7879-444b-8010-b1c0f3acc4f7)



เอาล่ะ เข้าสู่เมนูหลักของเรากันแล้ว ! 
นี่จึงจะเป็นฟีเจอร์หลักของ Repo นี้ นั่นคือการส่ง Report ค่าใช้จ่ายประจำวันมายัง Disocrd ไงล่ะ !!

ลำดับแรก สร้าง Discord Webhook กันก่อน โดยต้องมี Server เป็นของตัวเองก่อนนะ และสร้าง text channel ใหม่ขึ้นมา

![9](https://github.com/samanwanich/LedgerAppScript/assets/56758896/5c03e5dd-cbbb-472b-a793-11fa8bde07d1)


Edit Channel -> Integrations -> Create Webhook

![10](https://github.com/samanwanich/LedgerAppScript/assets/56758896/5ab5f710-45aa-4af4-9ea3-10aae8da0a1b)


คลิกเข้าไปยัง Webhook ที่เราสร้าง แล้ว Copy Webhook URL มาได้เลยจ้า

![11](https://github.com/samanwanich/LedgerAppScript/assets/56758896/0c55b525-0760-4b09-893e-1bcf561c9400)


ลำดับต่อมา ให้เราเปิด App Script จาก Spreadsheet ของเรา

![8](https://github.com/samanwanich/LedgerAppScript/assets/56758896/85692721-e274-4143-8409-6a111c2c1963)


เข้าสู่ตั้งค่า เลื่อนลงล่างสุดนะ แล้วกดตามนี้เลย

![8-1](https://github.com/samanwanich/LedgerAppScript/assets/56758896/5a0e7cf1-4993-4a07-80d4-b05c869aaec8)


เอาล่ะ แล้วช่องแรก ให้กรอกว่า webhookUrl ชื่อนี้เป๊ะ ๆ นะ อย่าเปลี่ยนนะ มันเชื่อมกับโค๊ดไว้จ้า! 
ส่วนช่องที่สอง ก็ให้ ก็อปวาง Discord Webhook Url ก่อนหน้านี้ลงไป

![8-2](https://github.com/samanwanich/LedgerAppScript/assets/56758896/fb0be6c3-c417-4c5a-833f-cf8665d50aeb)


ลำดับต่อมา ให้เพิ่ม ทริกเกอร์ จ้า
ทำตามภาพเลย

![8-3](https://github.com/samanwanich/LedgerAppScript/assets/56758896/9c6ce773-0f2a-404f-b246-6d4f7400341a)


เลือกบัญชีตัวเอง แล้วกดตามนี้ ยืนยันสิทธิ์ต่าง ๆ ให้เรียบร้อย 

![13](https://github.com/samanwanich/LedgerAppScript/assets/56758896/61e5edcd-11ba-4b6d-99ca-ccc9b4367aeb)


* สิทธิ์พวกนี้คือ การส่งข้อมูล รายรับ/รายจ่าย ผ่านทาง Webhook ของ Discord นั่นเอง ซึ่งสำหรับ Google แล้วนั้น
การส่งข้อมูลออกไปยังไซต์อื่น ๆ ที่ไม่ใช่ Domain เดียวกัน ก็จะแจ้งเตือน (ในที่นี้คือ App ของ Google)

//จริง ๆ ก็สำหรับทุกแบรนด์ที่ได้มาตรฐานน่ะแหละ
ดังนั้น สำหรับข้อนี้ Google +1 คะแนน

![14](https://github.com/samanwanich/LedgerAppScript/assets/56758896/732b56f2-f29b-4355-a363-47ef9bce8b63)




เพียงเท่านี้ก็จะส่งแจ้งเตือนมาทุกวัน ช่วงเวลาประมาณ เที่ยงคืน - ตี1 จ้า

![image](https://github.com/samanwanich/LedgerAppScript/assets/56758896/87df4abb-9b5a-4ddd-8ff6-e9d5a7d5e8cf)

