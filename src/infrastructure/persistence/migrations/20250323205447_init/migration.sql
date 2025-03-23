-- CreateTable
CREATE TABLE "Author" (
    "Id" UUID NOT NULL,
    "Name" TEXT NOT NULL,
    "Country" TEXT NOT NULL,
    "State" TEXT NOT NULL,
    "Street" TEXT NOT NULL,
    "Zipcode" VARCHAR(5) NOT NULL,
    "PhoneNumber" TEXT NOT NULL,

    CONSTRAINT "Author_pkey" PRIMARY KEY ("Id")
);
