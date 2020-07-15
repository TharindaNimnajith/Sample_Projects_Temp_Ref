insert into Product
values('Orange Juice',150,'Fruit juice','~/Content/uploads/1.jpg')

insert into Product
values('Lemon Juice',150,'Fruit juice','~/Content/uploads/2.jpg')

insert into Product
values('Pineapple Juice',150,'Fruit juice','~/Content/uploads/3.jpg')

insert into Product
values('StrawBerry Juice',150,'Fruit juice','~/Content/uploads/4.jpg')

insert into Product
values('Apple Juice',150,'Fruit juice','~/Content/uploads/5.jpg')

insert into Product
values('Sugarcane Juice',150,'Fruit juice','~/Content/uploads/6.jpg')

SELECT* FROM dbo.OutGoing

SELECT * FROM dbo.Orders

INSERT INTO dbo.Users
(
    usr_name,
    usr_contact,
    usr_password
)
VALUES
(   'pathum', -- usr_name - nvarchar(50)
    '0226785411', -- usr_contact - nvarchar(50)
    'pathum123'  -- usr_password - nvarchar(50)
    )