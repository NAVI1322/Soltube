-- CreateTable
CREATE TABLE "User" (
    "UserId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
