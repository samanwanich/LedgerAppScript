# LedgerAppScript
อ้อ แล้วก็ Repo นี้ ไม่จำเป็นต้องก็อปโค๊ดใด ๆ ไปวางนะ เพียงแค่กด ทำสำเนา จาก Spreadsheet แค่นั้นเลย!
https://docs.google.com/spreadsheets/d/1nlrcB60W89Dlq4k1LWp6g3vBdvggVKskMt28BbR6hIg/edit?usp=sharing

อันดับแรกขอแนะนำให้รู้จักกับ หน้าตาของ Spreadsheet ปัจจุบันกันก่อน
โดยช่อง เงินเข้า/เงินออก/สรุป บ. นั้นจะหมายถึงยอดรวมภายในบัญชีนั่นเอง
ส่วนช่องที่มีลักษณะคล้ายกันลำดับถัดมา คือ ยอดเงินสด

![1](https://github.com/samanwanich/LedgerAppScript/assets/56758896/156f2865-be84-4c84-b823-c04093de5077)


ซึ่งจากภาพก่อนหน้า จะเห็นได้ว่า เป็นเพียงแค่การทำสรุปยอดของแต่ละเดือนเพียงเท่านั้น
 
ถ้าอยากจะทำเดือนต่อไปล่ะ ทำยังไงดี !?

กดทำสำเนา Month 11/2023 เลยจ้า! (ต้อง Month 11/2023 เท่านั้นนะ เพราะมีการผูกสูตรต่าง ๆ ไว้ หรือใครจะอินดี้ เอาของ Month 10/2023 ก็ได้ แต่ก็ต้องไปนั่งกรอกเงินต้นเองใหม่นะ555)

![2](https://github.com/samanwanich/LedgerAppScript/assets/56758896/1e9c8264-d9d3-4b20-8338-fc22ce2d3efe)


ทำสำเนาเสร็จแล้วจะได้หน้าตาประมาณนี้กัน

![3](https://github.com/samanwanich/LedgerAppScript/assets/56758896/47d04ee5-7898-4bfc-a3f7-7ee238f0002d)



เอาล่ะ เปลี่ยนชื่อเป็น Month 12/2023

**สำคัญมากกกกกกกกก  การตั้งชื่อ Sheet ภายในให้ตั้งเป็น Month และตามด้วยเลขเดือน/ปี ตัวอย่างเช่น จะตั้งชื่อ sheet ประจำเดือน มีนาคม ปี 2024
ให้ตั้งชื่อเป็น Month 03/2024 หรือ Month 03/2567

![4](https://github.com/samanwanich/LedgerAppScript/assets/56758896/ca15924b-04a2-4b1e-81c0-4fabd8412a18)


เปลี่ยนสูตรของทั้ง 3 ช่อง ก่อน
1. เดือนที่ระบุ ปรับจาก Month 10/2023 -> Month 11/2023 หรือก็คือ Sheet ก่อนหน้านั่นเอง

![5](https://github.com/samanwanich/LedgerAppScript/assets/56758896/cdc40b41-f41b-44ff-94aa-4fa474284a05)


2. สรุปบัญชี Month 10/2023 -> Month 11/2023

![6](https://github.com/samanwanich/LedgerAppScript/assets/56758896/1402c6e5-35f6-43d5-ad31-9a2b8e46330e)


3. สรุป Month 10/2023 -> Month 11/2023

![7](https://github.com/samanwanich/LedgerAppScript/assets/56758896/45efd949-8531-4bb1-9740-a19aa7c38b39)



เอาล่ะ เข้าสู่เมนูหลักของเรากันแล้ว ! 
นี่จึงจะเป็นฟีเจอร์หลักของ Repo นี้ นั่นคือการส่ง Report ค่าใช้จ่ายประจำวันมายัง Disocrd ไงล่ะ !!

ลำดับแรก สร้าง Discord Webhook กันก่อน โดยต้องมี Server เป็นของตัวเองก่อนนะ และสร้าง text channel ใหม่ขึ้นมา

![9](https://github.com/samanwanich/LedgerAppScript/assets/56758896/5cf0e5e6-cf9d-4fc5-92e2-49f1bf5a506f)


Edit Channel -> Integrations -> Create Webhook

![10](https://github.com/samanwanich/LedgerAppScript/assets/56758896/3420811a-e671-4193-89ae-4e6406f2e04e)


คลิกเข้าไปยัง Webhook ที่เราสร้าง แล้ว Copy Webhook URL มาได้เลยจ้า

![11](https://github.com/samanwanich/LedgerAppScript/assets/56758896/bf1267d1-fadb-4d79-afa7-b8a57fedcb8d)


ลำดับต่อมา ให้เราเปิด App Script จาก Spreadsheet ของเรา

![8](https://github.com/samanwanich/LedgerAppScript/assets/56758896/69a9d9fd-6353-4d77-8733-75017b584514)


เข้าสู่ตั้งค่า เลื่อนลงล่างสุดนะ แล้วกดตามนี้เลย

![8-1](https://github.com/samanwanich/LedgerAppScript/assets/56758896/1a7bea9a-8647-44ff-8b60-6f40942c8c98)


เอาล่ะ แล้วช่องแรก ให้กรอกว่า webhookUrl ชื่อนี้เป๊ะ ๆ นะ อย่าเปลี่ยนนะ มันเชื่อมกับโค๊ดไว้จ้า! 
ส่วนช่องที่สอง ก็ให้ ก็อปวาง Discord Webhook Url ก่อนหน้านี้ลงไป

![8-2](https://github.com/samanwanich/LedgerAppScript/assets/56758896/56cc2094-ac7d-452b-a2a8-76f057a8dbd0)


ลำดับต่อมา ให้เพิ่ม ทริกเกอร์ จ้า
ทำตามภาพเลย

![8-3](https://github.com/samanwanich/LedgerAppScript/assets/56758896/79549af8-bb2a-4bc7-bef4-1bff7343e45d)


เลือกบัญชีตัวเอง แล้วกดตามนี้ ยืนยันสิทธิ์ต่าง ๆ ให้เรียบร้อย 

![13](https://github.com/samanwanich/LedgerAppScript/assets/56758896/5b701641-36e1-4c4b-9944-1ce408beeaf2)


* สิทธิ์พวกนี้คือ การส่งข้อมูล รายรับ/รายจ่าย ผ่านทาง Webhook ของ Discord นั่นเอง ซึ่งสำหรับ Google แล้วนั้น
การส่งข้อมูลออกไปยังไซต์อื่น ๆ ที่ไม่ใช่ Domain เดียวกัน ก็จะแจ้งเตือน (ในที่นี้คือ App ของ Google)

//จริง ๆ ก็สำหรับทุกแบรนด์ที่ได้มาตรฐานน่ะแหละ
ดังนั้น สำหรับข้อนี้ Google +1 คะแนน

![14](https://github.com/samanwanich/LedgerAppScript/assets/56758896/d25880ba-4c87-49cd-b598-c411f81897ea)




เพียงเท่านี้ก็จะส่งแจ้งเตือนมาทุกวัน ช่วงเวลาประมาณ เที่ยงคืน - ตี1 จ้า

![image](https://github.com/samanwanich/LedgerAppScript/assets/56758896/d5a76080-cc4f-4fcd-a96b-35252f99e83d)

